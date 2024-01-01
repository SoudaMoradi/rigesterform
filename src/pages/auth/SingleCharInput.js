import {React, useState, useRef, useEffect} from 'react';

function SingleCharInput({disabled, onChange}) {
    const [code, setCode] = useState([]);
    const ref = [useRef(null),useRef(null),useRef(null),useRef(null)];

    useEffect(()=>{

        // console.log(code);
    }, [code])

    const onInputChange = (index, value)=>{
        let _code = [...code];
        _code[index] = value;
        setCode(_code);
        onChange(_code.join(""));
        if (value && index<3){
            ref[index+1].current.focus();
            ref[index+1].current.select();
        }
    }

    const onKeyUp=(index, e)=>{
        // console.log(e.target.tabIndex);
        if (e.keyCode===8){
            if (index>0){
                ref[index-1].current.focus();
                ref[index-1].current.select();
            }
        }
    }

    return (
        <div className="flex justify-content-center flex-wrap card-container blue-container mt-4">
            <div className="flex align-items-center w-3 h-4rem p-1">
                <input ref={ref[3]} className={`text-center bg-gray-100 focus:bg-white border-round-lg h-full w-full font-bold text-lg ${disabled && "p-disabled"}`} onChange={(e)=>{onInputChange(3, e.target.value)}} onKeyUp={(e)=>{onKeyUp(3,e)}} tabIndex={4} type="tel" maxLength={1} minLength={1} min={0} max={9}/>
            </div>
            <div className="flex align-items-center w-3 h-4rem p-1">
                <input ref={ref[2]} className={`text-center bg-gray-100 focus:bg-white border-round-lg h-full w-full font-bold text-lg ${disabled && "p-disabled"}`} onChange={(e)=>{onInputChange(2, e.target.value)}} onKeyUp={(e)=>{onKeyUp(2,e)}} tabIndex={3} type="tel" maxLength={1} minLength={1} min={0} max={9}/>
            </div>
            <div className="flex align-items-center w-3 h-4rem p-1">
                <input ref={ref[1]} className={`text-center bg-gray-100 focus:bg-white border-round-lg h-full w-full font-bold text-lg ${disabled && "p-disabled"}`} onChange={(e)=>{onInputChange(1, e.target.value)}} onKeyUp={(e)=>{onKeyUp(1,e)}} tabIndex={2} type="tel" maxLength={1} minLength={1} min={0} max={9}/>
            </div>
            <div className="flex align-items-center w-3 h-4rem p-1">
                <input ref={ref[0]} className={`text-center bg-gray-100 focus:bg-white border-round-lg h-full w-full font-bold text-lg ${disabled && "p-disabled"}`} onChange={(e)=>{onInputChange(0, e.target.value)}}  onKeyUp={(e)=>{onKeyUp(0,e)}} tabIndex={1} type="tel" maxLength={1} minLength={1} min={0} max={9} autoFocus/>
            </div>
        </div>
    );
}
export default SingleCharInput;