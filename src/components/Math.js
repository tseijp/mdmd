import React from 'react';
import PropTypes from 'prop-types';
import MathJax from 'react-mathjax';

const Math = (props) => {
    const {inline, value} = props;
    //const [isCopied, setIsCopied] = useState(false);
    const handleCopy = (e,v)=> {
    //    setIsCopied(true);
        navigator.clipboard.writeText(v)
    }
    return (
            <MathJax.Node inline={inline} formula={value}
                onDoubleClick={(e)=>handleCopy(e,value)}/>
    )
}

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
export default Math;
