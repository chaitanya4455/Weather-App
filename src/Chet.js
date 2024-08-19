import React from "react";
function Chet(){
return(
<>
<nav className="h-10  w-full bg-indigo-600 flex justify-between flex-row px-4 md:px-4">
    <div className="text-xl font-bold bg-indigo-600">Codenera</div>
    <ul className="md:flex hidden pt-1 font-semibold ">
        <li className="mx-[10px]">Home</li>
        <li className="mx-[10px]">About Us</li>
        <li className="mx-[10px]">Contact US</li>
    </ul>
    <div className="hidden md:block px-2 py-1 my-[4px] bg-indigo-700 text-white ring-2 ring-white rounded-lg"><button>Log in</button></div>
    <div className="md:hidden "><a> &#8801</a></div>
</nav>
<header>
    <img className="w-full md:block" src="https://images.moneycontrol.com/static-mcnews/2020/02/SBI_Card_SBICard-770x433.jpg?impolicy=website&width=770&height=431"/>
    <img className="  md:hidden w-full" src="https://bsmedia.business-standard.com/_media/bs/img/article/2023-08/16/full/1692183970-1856.jpg?im=FitAndFill=(826,465)"/>

</header>
<div className="h-auto w-100 flex flex-wrap flex-col items-center text-center p-10">
<div className=" w-full h-auto flex flex-wrap items-center flex-col ">
    <h4 className="text-center text-indigo-800 font-bold  text-xl md:2xl">"Pure Hardwork, No shortcuts"</h4>
    <div className="w-36 h-1 border-b-4 border-yellow-400 md:mt-1 mb-11 rounded-2xl"></div>
</div>
<div className="w-full flex flex-wrap justify-evenly">
<div className="flex flex-col items-center mb-12 ">
    <img  className=" w-[88px] h-[67px] rounded-full"src="https://cdn-icons-png.flaticon.com/512/3429/3429149.png"/>
    <p className="text-xl  font-bold text-black">600+</p>
    <p className="text-xl font-bold text-gray-500">Different Courses</p>
</div>
<div className="flex flex-col items-center mb-12 ">
    <img  className=" w-[88px] h-[67px] rounded-full"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQpLVxw_nBIn3Qdq61lR4det9vNOp0nFI_Qzbq-xqyDA&s"/>
    <p className="text-xl  font-bold text-black">70000+</p>
    <p className="text-xl font-bold text-gray-500">Students Enrolled</p>
</div>
<div className="flex flex-col items-center mb-12 ">
    <img  className=" w-[88px] h-[67px] rounded-full"src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQpLVxw_nBIn3Qdq61lR4det9vNOp0nFI_Qzbq-xqyDA&s"/>
    <p className="text-xl  font-bold text-black">10000+</p>
    <p className="text-xl font-bold text-gray-500">Transactions</p>
</div>
</div>
</div>
<div className=" w-full h-auto flex flex-wrap items-center flex-col ">
    <h4 className="text-center text-indigo-800 font-bold  text-xl md:2xl">Our Products</h4>
    <div className="w-36 h-1 border-b-4 border-yellow-400 md:mt-1 mb-11 rounded-2xl"></div>
</div>
<div className="w-[90%] h-auto flex  flex-row  border-white border-2  flex-wrap justify-evenly">
<div className="flex flex-col items-center mb-12  w-[128px]">
    <img  className=" w-[88px] h-[67px] rounded-full"src="https://cdn-icons-png.flaticon.com/512/3429/3429149.png"/>
    <p className="text-xl  font-bold text-black">PW Skills Lab</p>
    <p className=" text-sm font-bold text-gray-500">Supercharge your project development with our Robust lab</p>
</div>
<div className="flex flex-col items-center flex-wrap mb-12  w-[128px]">
    <img  className=" w-[88px] h-[67px] rounded-full"src="https://cdn-icons-png.flaticon.com/512/3429/3429149.png"/>
    <p className="text-xl  font-bold text-black">Job Portal</p>
    <p className="text-sm font-bold text-gray-500">Supercharge your project development with our Robust lab</p>
</div>
<div className="flex flex-col items-center flex-wrap mb-12 w-[138px]">
    <img  className=" w-[88px] h-[67px] rounded-full"src="https://cdn-icons-png.flaticon.com/512/3429/3429149.png"/>
    <p className="text-xl  font-bold text-black mb-7"></p>
    <p className="text-sm font-bold text-gray-500">Supercharge your project development with our Robust lab</p>
</div>
<div className="flex flex-col items-center flex-wrap mb-12  w-[138px]">
    <img  className=" w-[88px] h-[67px] rounded-full"src="https://cdn-icons-png.flaticon.com/512/3429/3429149.png"/>
    <p className="text-xl  font-bold text-black mb-7"></p>
    <p className=" text-sm font-bold text-gray-500">Supercharge your project development with our Robust lab</p>
</div>
</div>
<footer className="w-full bg-gray-900 px-4 text-white pt-8 flex flex-col md:flex-row flex-wrap justify-between md:px-12">

</footer>
</>
);
}
export default Chet;