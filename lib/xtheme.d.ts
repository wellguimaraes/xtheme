import React, { ComponentType } from 'react';
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
export declare function createThemeContainer<T extends ComponentType<any> | keyof JSX.IntrinsicElements>(Element: T, values: VariableValueSet): React.ForwardRefExoticComponent<Pick<any, string | number | symbol> & React.RefAttributes<T>>;
//# sourceMappingURL=xtheme.d.ts.map