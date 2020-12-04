import React, {
  ComponentType,
  CSSProperties,
  ReactNode,
  Ref,
  useEffect,
  useMemo,
} from 'react'
import * as units from './units'

export { units }

let variableSeq = 0

export const createVariable = (name: PropertyKey) => {
  const fullName = `${name.toString()}_${variableSeq++}`

  return {
    get() {
      return `var(--${fullName})`
    },
    set(newValue: any) {
      return `--${fullName}: ${
        typeof newValue === 'function' ? newValue() : newValue || 'unset'
      }`
    },
  }
}

export type CSSVariable = (() => string) & {
  get(): string
  set(newValue: any): string
}

type CSSVariableSet<T extends string> = {
  [k in T]: CSSVariable
}

type VariableValueSet = [CSSVariable, any][]

export const createVariableSet = <T extends string>(): CSSVariableSet<T> =>
  new Proxy(
    {},
    {
      get(target: any, key: PropertyKey): any {
        const variable = () => {
          if (!target[key]) {
            target[key] = createVariable(key)
          }
          return target[key].get()
        }

        variable.set = (newValue: any) => {
          if (!target[key]) {
            target[key] = createVariable(key)
          }

          return target[key].set(newValue)
        }

        variable.get = () => variable()
        variable.toString = () => variable()

        return variable
      },
    }
  ) as any

type GlobalThemeProps = { override?: VariableValueSet }

export const createGlobalTheme = (
  values: VariableValueSet
): React.FC<GlobalThemeProps> => {
  const WrappedComponent: React.FC<GlobalThemeProps> = ({ override = [] }) => {
    const styles = useMemo(
      () =>
        `:root {${[...values, ...override]
          .map(([variable, value]) => variable.set(value))
          .join(';')}}`,
      [values, override]
    )

    useEffect(() => {
      const styleElement = document.createElement('style')
      styleElement.innerHTML = styles
      document.head?.appendChild(styleElement)

      return () => {
        document.head?.removeChild(styleElement)
      }
    }, [styles])

    return null
  }

  WrappedComponent.displayName = 'GlobalTheme'

  return WrappedComponent
}

export function createThemeContainer<
  T extends ComponentType<any> | keyof JSX.IntrinsicElements
>(Element: T, values: VariableValueSet) {
  function ThemeContainer(
    {
      className,
      style,
      ...otherProps
    }: {
      children: ReactNode
      className: string
      style: CSSProperties
    } & any,
    ref: Ref<T>
  ) {
    const themeClassName = useMemo(
      () => `theme-container-${Math.random().toString(36).substr(2)}`,
      []
    )

    useEffect(() => {
      const styleElement = document.createElement('style')
      styleElement.innerHTML = `.${themeClassName} { ${values
        .map(([variable, value]) => variable.set(value))
        .join(';')} }`
      document.head?.appendChild(styleElement)

      return () => {
        document.head?.removeChild(styleElement)
      }
    }, [])

    return (
      <Element
        ref={ref}
        style={style}
        className={`${themeClassName} ` + className}
        {...otherProps}
      />
    )
  }

  return React.forwardRef(ThemeContainer)
}
