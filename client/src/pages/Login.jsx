const Login = () => {
	return (
		<div className="w-screen min-h-screen flex flex-row overflow-hidden">
			<div className="form-section flex-1 flex justify-center items-center">
				<form className="flex flex-row flex-wrap gap-4 justify-center items-center w-1/2 p-8 border-2 border-indigo-500 rounded-3xl box-border shadow-md shadow-indigo-500 bg-white/90 backdrop-blur-md hover:scale-105 ease-in-out delay-200 hover:rotate-3 hover:shadow-2xl hover:shadow-indigo-500 transition">
					<div className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
						Login
					</div>
					<label
						htmlFor="email"
						className="flex flex-col w-full gap-2 box-border text-indigo-500"
					>
						Email
						<input
							type="email"
							name=""
							id="email"
							className="py-2 px-4 rounded-md bg-indigo-400 placeholder-slate-300 box-border text-slate-100"
							placeholder="email"
						/>
					</label>
					<label
						htmlFor="password"
						className="flex flex-col w-full gap-2 box-border text-indigo-500"
					>
						Password
						<input
							type="password"
							name=""
							id="password"
							className="py-2 px-4 rounded-md bg-indigo-400 placeholder-slate-300 box-border text-slate-100"
							placeholder="password"
						/>
					</label>
					<input
						type="submit"
						value="LOGIN"
						className="w-full py-2 px-4 mt-8 rounded-md hover:cursor-pointer bg-gradient-to-r from-pink-500 to-violet-500 placeholder-slate-300 box-border text-slate-100"
					/>
				</form>
			</div>
			<div className="flex-1 bg-gradient-to-tr from-indigo-400 to-indigo-700"></div>
		</div>
	);
};

export default Login;
