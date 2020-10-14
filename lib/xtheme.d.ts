import React, { ComponentType, CSSProperties, ReactNode } from 'react';
import * as units from './units';
export { units };
export declare const createVariable: (name: PropertyKey) => {
    get(): string;
    set(newValue: any): string;
};
export declare type CSSVariable = (() => string) & {
    get(): string;
    set(newValue: any): string;
};
declare type CSSVariableSet<T extends string> = {
    [k in T]: CSSVariable;
};
declare type VariableValueSet = [CSSVariable, any][];
export declare const createVariableSet: <T extends string>() => CSSVariableSet<T>;
declare type GlobalThemeProps = {
    override?: VariableValueSet;
};
export declare const createGlobalTheme: (values: VariableValueSet) => React.FC<GlobalThemeProps>;
export declare const createThemeContainer: (Element: ComponentType<any> | keyof JSX.IntrinsicElements, values: VariableValueSet) => ({ className, style, ...otherProps }: any) => JSX.Element;
//# sourceMappingURL=xtheme.d.ts.map