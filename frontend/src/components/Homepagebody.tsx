import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Homepage from './Homepage'
import Footer from './Footer'
import img from "./images/1.jpg"
import img2 from "./images/2.jpg"
import img3 from "./images/3.jpg"
import img4 from "./images/4.jpg"

export default function Homepagebody() {
  const [bmidata,setBmidata]=useState<number>(0)
  const [bmiweight,setBmiweight]=useState<number>(0)
  const [bmiheight,setBmiheight]=useState<number>(0)
 
  const calculatebmi=()=>{
   const num=Number((bmiweight)/Number((bmiheight/100)*(bmiheight/100)))
   num.toFixed(2)
   const roundedNum = Number(num.toFixed(2))
   setBmidata(roundedNum)
  }

  return (
    <>
   
    <div className='   flex flex-row justify-between '>
        <div className='w-[25%] shadow-[black]'  >
            <img className="w-[100%] h-[100%] transition-transform  duration-500 transform hover:scale-125  " src="https://i.pinimg.com/736x/1f/c5/d3/1fc5d3dd32ec21e143949fffba4a9c76.jpg"/></div>

    <div  className='   w-[70%] '>
        <div className=' mt-100px'>
<h1 className='text-7xl text-gray-400  text-left leading-none ' >Make weight loss fun, permanent and natural</h1></div>
<p className='mt-11 text-[#2f313b] text-[24px] text-left'>Achieve long-term wellness through simple, powerful, and holistic <br></br> changes in your nutrition and eating habits</p>
<button className=' bg-[#99e8d3] text-[#2f313b] text-[24px] w-[200px] mt-5 rounded-full hover:bg-[#3ce3b7] transition duration-300 ease-in-out'> Talk To Us</button> <button className='bg-[#d0e3de] text-[#2f313b]  hover:bg-[#fbcdb3] text-[24px] w-[200px]  transition duration-300 ease-in-out mt-5 rounded-full'>Know More</button>

</div>

</div>
  <div><h1  className='text-[40px] text-[#2f313b] mt-9'>Explore Our Blogs</h1>
  <div className='mt-[20px]'>
    <img className='w-[100%]' src="https://i0.wp.com/fitelo.co/wp-content/uploads/summer-diet-2.jpg?w=1220&ssl=1"/>
    </div>

{/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

<div className="bg-gray-100">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
      <h2 className="text-2xl font-bold text-gray-900">Blogs</h2>
      {/* border border-slate-500 */}
      <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
        <div className="group relative">
          <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
            <img src="https://i0.wp.com/fitelo.co/wp-content/uploads/600-calorie-indian-diet-plan.jpg?resize=768%2C395&ssl=1" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." className="h-full w-full object-cover object-center"/>
          </div>
          <h3 className="mt-6 text-sm text-gray-500">
            <a href="#">
              <p className="">
              What To Expect With A 600 Calorie Indian Diet Plan For Weight Loss<br></br>
{new Date().toLocaleString()}              </p>
            
            </a>
          </h3>
          <Link to="/blogs"  className=" text-gray-900"><u>ReadMore...</u></Link>
        </div>
        <div className="group relative">
          <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
            <img src="https://i0.wp.com/fitelo.co/wp-content/uploads/rheumatoid-arthritis-diet-plan.jpg?resize=768%2C395&ssl=1" alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." className="h-full w-full object-cover object-center"/>
          </div>
          <h3 className="mt-6 text-sm text-gray-500">
            <a href="#">
              <span className="">  Factors And Tips To Follow For Rheumatoid Arthritis Diet Plan<br></br></span>
          
              {new Date().toLocaleString()}
            </a>
          </h3>
          <Link to="/blogs" className="text-base font-semibold text-gray-900"><u>Read More</u></Link>
        </div>
        <div className="group relative">
          <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
            <img src="https://i0.wp.com/fitelo.co/wp-content/uploads/night-shift-diet-plan.jpg?resize=768%2C395&ssl=1" alt="Collection of four insulated travel bottles on wooden shelf." className="h-full w-full object-cover object-center"/>
          </div>
          <h3 className="mt-6 text-sm text-gray-500">
            <a href="#">
              <span ></span>
              Presenting You With A Night Shift Diet Plan Along With The Best Tips<br></br>{new Date().toLocaleString()}
            </a>
          </h3>
          <Link to="/blogs" className="text-base font-semibold text-gray-900"><u>Read More...</u></Link>
       
        </div>

      </div>
      <div className=' mt-5'><button className=' sm:ml-[40vw] md:ml-[40vw] lg:ml-[40vw] xl:ml-[40vw]  rounded-full  h-10 w-[200px] bg-[#99e8d3] hover:bg-[#3ce3b7]'>More Blogs</button></div> 
    </div>
   
  </div>

</div>

</div>
<div className='w-[90%] flex gap-4'>
  <div>
<img src="https://fitelo.co/wp-content/themes/Fitelo/images/person-with-laptop.jpeg"/>
  </div>
  <div>
  

 <form   className="">
    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
      <div>
        <label  className="block text-sm font-semibold leading-6 text-gray-900">First name</label>
        <div className="mt-2.5">
          <input type="text"  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
        <div className="mt-2.5">
          <input type="text"  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div className="sm:col-span-2">
        <label  className="block text-sm font-semibold leading-6 text-gray-900">City</label>
        <div className="mt-2.5">
          <input type="text"   className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div className="sm:col-span-2">
        <label className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
        <div className="mt-2.5">
          <input type="email"  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div className="sm:col-span-2">
        <label  className="block text-sm font-semibold leading-6 text-gray-900">Phone number</label>
        <div className="relative mt-2.5">
          <div className="absolute inset-y-0 left-0 flex items-center">
            <label  className="sr-only">Country</label>
            <select  className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
              <option>US</option>
              <option>CA</option>
              <option>EU</option>
            </select>
            <svg className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
          </div>
          <input type="tel" className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>
      <div className="sm:col-span-2">
        <label  className="block text-sm font-semibold leading-6 text-gray-900">Message</label>
        <div className="mt-2.5">
          <textarea name="message"  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
        </div>
      </div>
      <div className="flex gap-x-4 sm:col-span-2">
        <div className="flex h-6 items-center">
      
          <button type="button" className="bg-gray-200 flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" role="switch" aria-checked="false" aria-labelledby="switch-1-label">
            <span className="sr-only">Agree to policies</span>
          
            <span aria-hidden="true" className="translate-x-0 h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"></span>
          </button>
        </div>
        <label className="text-sm leading-6 text-gray-600" id="switch-1-label">

          <a href="#" className="font-semibold text-indigo-600">privacy&nbsp;policy</a>.
        </label>
      </div>
    </div>
    <div className="mt-10">
      <button type="submit" className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Book a consultation now</button>
    </div>
  </form>
</div>

</div>
<div className="bg-white py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
      <div className="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt className="text-base leading-7 text-gray-600">coaches</dt>
        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">300+</dd>
      </div>
      <div className="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt className="text-base leading-7 text-gray-600">Success Rate</dt>
        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">99.3%</dd>
      </div>
      <div className="mx-auto flex max-w-xs flex-col gap-y-4">
        <dt className="text-base leading-7 text-gray-600">Lives Impacted</dt>
        <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">1 Million+</dd>
      </div>
    </dl>
  </div>
</div>
<div><img src={img}/></div>
<div className='  border border-slate-600 mt-[50px]'>
  <p className='text-[#2f313b] text-[48px]  text-center'>Get deeper insights on your health</p>
 <div className=' flex justify-center mt-[10px]'><button onClick={calculatebmi} className='   rounded-full bg-[#ff8643] hover:bg-[#d46224] w-[200px] h-[50px]'>BMI Calculater</button></div> 
 <div>
  <div className='  flex justify-around w-[60%] m-auto mt-[40px] '>
<input className=' border border-slate-600 h-[40px]' onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setBmiweight(Number(e.target.value))} placeholder='Weight (In Kg)' type='number'/>
<input className=' border border-slate-600 h-[40px]' type="number" onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setBmiheight(Number(e.target.value))} placeholder='Height (In Cm)'/>
<p>{bmidata?`Your Bmi is:${bmidata}Kg/m^2`:"Your Bmi is__________________"}</p>
<p>{(bmidata&&bmidata<18.5)?"Below weight":(bmidata&&bmidata>=18.5&&bmidata<=24.9)?"Healthy":(bmidata&&bmidata>=24.9&&bmidata<=29.9)?"OverWeight":(bmidata&&bmidata>=30)?"Obese":""}</p>
</div>

 
 </div>
</div>
<div className='mt-[50px]'><img src={img3}/></div>
<div className='mt-[50px]'><img src={img4}/></div>
<div className='mt-[50px]'><img src={img2}/></div>

<Footer/>
</>





  )
}
