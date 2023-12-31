import {useStorage} from "./hooks/useStorage";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";


function App() {
    const {getUser}=useStorage();
    const user=getUser();
    console.log(user);



  return (
      <div className="h-screen w-screen">
          {
              user?(
                  <div>app</div>
              ):(
                  <div className="h-full flex justify-content-center align-items-center">
                      <div className="flex flex-column justify-content-center align-items-center w-5 bg-pink-100 border-round-xl shadow-2 p-5 gap-3">
                          <div className="p-3">
                              <span>  تناشرکت رها صنعت</span>
                          </div>
                          <div className="flex flex-column">
                              <label>نام کاربری</label>
                              <InputText/>

                          </div>
                          <div>
                              <InputText/>
                              <span> رمز عبور</span>

                          </div>
                          <div className="flex gap-3">
                              <Button className="p-button-text border-gray-500 bg-primary-500 text-white" label={'رمز را از گوشی بردارید و در اینجا بنویسید'}/>

                              <Button className="p-button-text border-gray-500 bg-primary-500 text-white" label={'ورود'}/>
                          </div>
                      </div>
                  </div>
                  // <div className="h-full flex align-items-center justify-content-center">
                  //     <div className="w-6 flex flex-column align-items-center bg-primary-50 border-round-xl shadow-3 p-3">
                  //         <div className="pt-5 p-5">
                  //             <span className="font-bold text-lg">شرکت رها گستر خوزستان</span>
                  //         </div>
                  //             <div className="flex flex-column">
                  //                 <div className="flex gap-2 justify-content-end ">
                  //                     <InputText className="w-12rem p-button-sm"/>
                  //                     <span>ورود</span>
                  //                 </div>
                  //                 <span className="text-sm">لطفا شماره تلفنی که بر روی واتس آپ نصب دارید وارد کنید </span>
                  //             </div>
                  //         <div>
                  //             <InputText/>
                  //             <span className="text-sm">رمز عبور به برنامه</span>
                  //         </div>
                  //         <div className="flex gap-3">
                  //             <Button className="p-button-sm p-button-text border-gray-200" label={'دریافت کد فعال سازی'}/>
                  //             <Button  label={'ورود'}/>
                  //         </div>
                  //     </div>
                  //
                  // </div>
              )
          }


      </div>
  );
}

export default App;
