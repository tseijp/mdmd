import {ReactNode as RN, Children} from 'react'

// ************************* 🎰 FOR TABLE 🎰 ************************* //
// ************************* **************** ************************* //
export const getarr=(arr:any)=>arr?arr instanceof Array?arr:[arr]:[]
export const gettrs=(els:any[])=>[].concat(...(els.map(el=>getarr(el?.props?.children)) as never[]));
export const getths=(row:any  )=>getarr(row?.props?.children).map(el=>getarr(el?.props?.children));
export const getcol=(els:any[])=>els.map((c,i)=>({label:c, field:""+i, sort:"asc", width:10}));
export const getrow=(els:any[])=>Object.assign( {},...els.map((c,i)=>({[""+i]:c})) )
export const getkey=(els:any[])=>[].concat(...els.map(el=>el)).map((v:any)=>v.key);
export const getIsX=(els:any[],key:string)=>els.every(el=>el.label.every((c:any)=>getAnyCh(c.props,key).length) )

// ************************* 📋 FOR LIST 📋 ************************* //
// * grands : i want to know as g0 is btn? link? g0.child is ?
// * i want know g0 have 'link' child and g0 have 'strong' grandchild.
// ************************* ************** ************************* //
type GetAnyCh<T=any> = (children:T, key:string) => T[]
type GetAnyGr<T=any> = (children:T, k1:string, k2:string) => (T[])[]
export const getAnyCh:GetAnyCh=(children,key)=>getarr(children).filter(c=>c.key&&c.key.match(key))//[g0,..]or[]
export const getAnyGr:GetAnyGr=(children,k,l)=>getAnyCh(children,k).map(c=>getAnyCh(c?.props?.children,l)).filter(g=>g.length)
export const getText=(children:any)=>getarr(children).map(c=>c.key&&c.key.match('link')?c.props.children:c)
export const getLink=(children:any)=>getarr(children).map(c=>c.key&&c.key.match('link')?c.props.href:'#!').filter(n=>n)[0]||'#!'

// ************************* 🤏 FOR GRID 🤏 ************************* //
// ************************* *************** ************************* //
export const getGrid = (children:RN, depth=0) : any =>
    getarr(children).map((child:any)=>
        child?.key && !!child.key.match('blockquote') && !!child?.props?.children
             ? getGrid(child.props.children, depth+1)
             : child
    )
export const getLevel = (children:RN) : number => {
    if (!children) return 0
    const keys = Children.toArray(children).map((c:any)=>c?.key).filter((k:any)=>k) as string[]
//  const is_w= keys.every(key=>key.match('delete'))     //put by delete     ~~e.g.~~ //TODO
    const is_1 = keys.every(key=>key.match('emphasis'))  //put by 1 underbar  _e.g._
    const is_2 = keys.every(key=>key.match('strong'))    //put by 2 underbar __e.g.__
    const is_3 = [].concat(...getarr(children).map(el=>  //put by 3 underbar___e.g.___
        el.props.children instanceof Array?Children.map(el.props.children,e=>e.key):[]
    )).every((key:string)=>key.match('emphasis'));
    return is_3?3:is_2?2:is_1?1:0
}
