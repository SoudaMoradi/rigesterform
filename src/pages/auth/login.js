import React, {useState} from 'react';
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {useStorage} from "../../hooks/useStorage";
import SingleCharInput from "./SingleCharInput";



function Login(props) {

    let user={name:'hana',family:'moradi'};


    const{setUser}=useStorage();
    const[code,setCode]=useState();
    const[error,setError]=useState();
    const ramzCode='1234';


    function requestLogin() {
        console.log(code)
        if(code==ramzCode){
            setUser(user);
            window.location.reload();
        }
        else{
            setError('رمز اشتباه است')

        }

    }


    return (
        <div className="h-full flex justify-content-center align-items-center">
            <div className="flex flex-column justify-content-center align-items-center w-4 border-round-xl shadow-2 p-5 gap-3">
             <div className="w-8">
                 <div className="p-3">
                     <span className="text-4xl font-bold font-italic text-primary-900">شرکت رها صنعت</span>
                 </div>
                 <div className="flex flex-column w-full">
                     <label className="text-lg text-right font-bold pb-2">ورود</label>
                     <span className="text-xs text-right pb-1">لطفا شماره موبایل خود را وارد کنید.</span>
                     <InputText className="bg-gray-100 border-none w-full"/>
                     <span className="text-xs text-right pt-1">لطفا شماره موبایلی که بر روی آن واتس اپ نصب دارید را وارد نمایید.</span>
                 </div>
                 <div className="flex flex-column w-full">
                     <span className="text-xs text-right pb-1">رمز عبور به برنامه</span>
                     <InputText className="bg-gray-100 border-none w-full"/>


                 </div>
                 <div>
                    <span style={{direction:'rtl'}}>
                        <SingleCharInput onChange={(e)=>{setCode(e)}}/>
                    </span>
                 </div>
                 <div className="flex gap-3 pt-4 pb-4">
                     <Button className="p-button-outlined border-primary-900 text-primary-900 " style={{width:'10rem'}} label={'دریافت کد فعال سازی'}/>
                     <Button className="p-button-text bg-primary-900 text-white " style={{width:'14rem'}} label={'ورود'} onClick={()=>{requestLogin() }}/>
                 </div>
             </div>
                <div className="p-error">
                    {error}
                </div>

            </div>
        </div>
    );
}

export default Login;