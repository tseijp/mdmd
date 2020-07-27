import React, {FC} from 'react';
import {BaseProps} from '../types';
const MathJax = require('react-mathjax');

interface MathProps extends BaseProps {inline?:boolean,value?:string}
const Math:FC<MathProps> = ({
        inline=false, value='',
        //children, className='', color='', style={} //TODO
    }) => {
    //const [isCopied, setIsCopied] = useState(false);
    const handleCopy = (_:any)=> {
    //    setIsCopied(true);
        navigator.clipboard.writeText(value)
    }
    return (
            <MathJax.Node inline={inline} formula={value}
                onDoubleClick={handleCopy}/>
    )
}
/*
Math.propTypes = {
    className: PropTypes.string,
    color    : PropTypes.string,
    style    : PropTypes.object,
    value    : PropTypes.string,
    inline   : PropTypes.bool,
};
Math.defaultProps = {
    className: '',
    coor :'',
    style:{},
    value:'',
    inline:false,
};
*/
export default Math;
