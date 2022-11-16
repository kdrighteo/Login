
import './App.css';

function App() {
  return (
    <section className=" bg-white min-h-screen flex items-center justify-center">
      <div className=" bg-white flex rounded-2xl max-w-3xl p-5">
        <div className=" sm:w-1/2">
          <h1 className=" font-bold text-2xl">Welcome back</h1>
          <p className=" text-xs mt-2">welcome back! please enter your details</p>

          <form className=" flex flex-col gap-2">
            <label className=" text-xs mt-8 font-semibold">Email</label>
            <input className="p-2 rounded-xl border" type="text" name="email" placeholder="Enter your email" />
            <label className="text-xs font-semibold">Password</label>
            <input className="p-2 rounded-xl border" type="password" name="password" placeholder="..........."/>
            <div className=" mt-2 flex justify-between items-center">
              <div className="text-xs inline-flex items-center font-semibold py-2">
                <input type="checkbox"/>
                <span className="ml-2 ">Remember for 30 days</span>
              </div>
              <div className="py-2">
                <a href="#" className=" text-indigo-500 text-xs font-semibold">Forgot password</a>
              </div>
            </div>
            <button className=" bg-blue-500 rounded-xl border h-10 text-white text-xs hover:scale-105 duration-300 ">Sign in</button>
            
            <button className=" bg-white border py-2 rounded-xl mt-2 text-xs font-semibold flex justify-center items-center hover:scale-105 duration-300">
              <svg class="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
              </svg>
              Sign in with Google
            </button>
            <div className=" flex justify-center items-center text-xs py-4">
              <p>Don't have an account? <a href="#" onClick className=" text-indigo-600 font-semibold"> Sign up</a></p>
            </div>
          </form>
        </div>

        <div className="sm:block hidden  w-1/2 ml-8 mt-10 hover:scale-105 duration-300">
          <img className=" rounded-2xl bg-gray-100" src="eye-png-42303.png" alt="" />
        </div>

      </div>

    </section>
)}

export default App;
