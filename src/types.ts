import {CSSProperties} from 'react'
export interface MdmdProps {
    /*----------main----------*/
    md?:any, path?:any,
    source   ?:string,
    renderers?:{[key:string]:any},
    /*----------sub----------*/
    className?:string,
    color    ?:string,
    style    ?:object,
    [key:string]:any,
    //...Object.assign({},...renderersKey.map( k=>({[`className${k}`]?:string}) )),
    //...Object.assign({},...renderersKey.map( k=>({[`color${k}`]?:string}) )),
    //...Object.assign({},...renderersKey.map( k=>({[`style${k}`]?:string}) )),
}

export interface BaseProps {
    className?: string,
    color    ?: string,
    style    ?: CSSProperties,
    active   ?: boolean,
    [key:string]:any,
}

export type backgroundColor =
  | 'danger'
  | 'dark'
  | 'default'
  | 'info'
  | 'light'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning';
export type backgroundColorType = { backgroundColor?: backgroundColor };
export type buttonColor =
  | 'amber'
  | 'blue-grey'
  | 'blue'
  | 'brown'
  | 'cyan'
  | 'danger'
  | 'dark-green'
  | 'dark'
  | 'deep-orange'
  | 'deep-purple'
  | 'default'
  | 'elegant'
  | 'green'
  | 'grey'
  | 'indigo'
  | 'info'
  | 'light-blue'
  | 'light-green'
  | 'light'
  | 'lime'
  | 'mdb-color'
  | 'orange'
  | 'pink'
  | 'primary'
  | 'purple'
  | 'secondary'
  | 'success'
  | 'unique'
  | 'warning'
  | 'red'
  | 'yellow';

export type classNameType = { className?: string };
export type color =
  | 'amber'
  | 'blue-grey'
  | 'blue'
  | 'brown'
  | 'cyan'
  | 'danger'
  | 'dark'
  | 'deep-orange'
  | 'deep-purple'
  | 'default'
  | 'green'
  | 'grey'
  | 'indigo'
  | 'info'
  | 'light-blue'
  | 'light-green'
  | 'light'
  | 'lime'
  | 'mdb-color'
  | 'muted'
  | 'orange'
  | 'pink'
  | 'primary'
  | 'purple'
  | 'red'
  | 'secondary'
  | 'success'
  | 'teal'
  | 'warning'
  | 'yellow';
