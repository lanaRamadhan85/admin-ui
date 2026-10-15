import "./App.css";

function App() {
  return (
    <main className="min-h-screen flex justify-center items-center bg-special-mainBg">
      <div className="w-full max-w-sm">
        {/* LOGO */}
        <div className="flex justify-center font-poppins tracking-wide text-primary text-4xl">
          <span className="font-bold">FINE</span>
          bank
          <span className="font-bold">.IO</span>
        </div>

        {/* FORM */}
        <form action="" className="mt-8">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm mb-2 text-gray-03 font-bold"
            >
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="text-sm py-3 px-4 w-full rounded-md border border-gray-01 focus:outline-none focus:border-primary"
              placeholder="hello@example.com"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm mb-2 text-gray-03 font-bold"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="text-sm py-3 px-4 w-full rounded-md border border-gray-01 focus:outline-none focus:border-primary"
              placeholder="*************"
            />
          </div>

          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="status"
                id="status"
                className="w-4 h-4 rounded border-gray-01 accent-primary"
              />
              <label
                htmlFor="status"
                className="text-sm text-gray-01 ml-2 font-medium"
              >
                Keep me signed in
              </label>
            </div>
            <a href="#" className="text-sm text-primary font-bold">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-3 px-4 rounded-md font-bold text-sm hover:opacity-90 transition-opacity"
          >
            Sign in
          </button>
        </form>

        {/* DIVIDER */}
        <div className="my-8 flex items-center before:flex-1 before:border-t before:border-gray-05 after:flex-1 after:border-t after:border-gray-05">
          <p className="mx-4 text-center text-xs text-gray-03">or sign in with</p>
        </div>

        {/* GOOGLE SIGN IN BUTTON */}
        <button
          type="button"
          className="w-full flex justify-center items-center py-3 px-4 border border-gray-05 rounded-md text-sm font-bold text-gray-01 hover:bg-gray-06 transition-colors"
        >
          <svg
            className="h-6 w-6 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width="800px"
            height="800px"
            viewBox="-0.5 0 48 48"
            version="1.1"
          >
            <g
              id="Icons"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g id="Color-" transform="translate(-401.000000, -860.000000)">
                <g id="Google" transform="translate(401.000000, 860.000000)">
                  <path
                    d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.218181818,20.2602667 0.218181818,24 C0.218181818,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                    id="Fill-1"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                    id="Fill-2"
                    fill="#EB4335"
                  ></path>
                  <path
                    d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                    id="Fill-3"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                    id="Fill-4"
                    fill="#4285F4"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          Continue with Google
        </button>

        {/* FOOTER LINK */}
        <p className="mt-8 text-center text-sm text-gray-03">
          Don’t have an account?{" "}
          <a href="#" className="text-primary font-bold">
            Create an account
          </a>
        </p>
      </div>
    </main>
  );
}

export default App;
