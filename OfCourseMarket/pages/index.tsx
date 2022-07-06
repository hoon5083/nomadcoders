import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
	return (
		<div className="grid min-h-screen gap-10 px-5 py-20 xl:place-content-center lg:grid-cols-2 xl:grid-cols-3 bg-slate-400">
			<div className="flex flex-col justify-between p-6 bg-white shadow-xl rounded-3xl">
				<span className="text-3xl font-semibold">Select Item</span>
				<ul>
					<div className="flex justify-between my-2">
						<span className="my-2 text-gray-500">Grey Chair</span>
						<span className="font-semibold">$19</span>
					</div>
					<div className="flex justify-between my-2">
						<span className="my-2 text-gray-500">Grey Chair</span>
						<span className="font-semibold">$19</span>
					</div>
				</ul>
				<div className="flex justify-between pt-2 mt-2 border-t-2 border-dashed">
					<span>Total</span>
					<span className="font-semibold">$10</span>
				</div>
				<button className="w-1/2 p-3 mx-auto mt-5 text-center text-white bg-blue-500 rounded-xl hover:bg-teal-500 hover:text-black active:bg-yellow-500 focus:text-red-500">
					Check Out
				</button>
			</div>
			<div className="overflow-hidden bg-white shadow-xl rounded-2xl group">
				<div className="p-6 bg-blue-500 landscape:bg-teal-500 portrait:bg-indigo-600 pb-14 xl:pb-40">
					<span className="text-2xl text-white">Profile</span>
				</div>
				<div className="relative p-6 bg-white rounded-3xl -top-5">
					<div className="relative flex items-end justify-between -top-16">
						<div className="flex flex-col items-center">
							<span className="text-sm text-gray-500">Orders</span>
							<span className="font-medium">340</span>
						</div>
						<div className="w-24 h-24 rounded-full bg-zinc-400 group-hover:bg-red-400" />
						<div className="flex flex-col items-center">
							<span className="text-sm text-gray-500">Spent</span>
							<span className="font-medium">$340</span>
						</div>
					</div>
					<div className="relative flex flex-col items-center -mb-5 -mt-14">
						<span className="text-lg font-medium">Tony Molloy</span>
						<span className="text-sm text-gray-500">미국</span>
					</div>
				</div>
			</div>
			<div className="p-10 bg-white shadow-xl lg:col-span-2 rounded-2xl xl:col-span-1">
				<div className="flex items-center justify-between mb-5">
					<span>⬅️</span>
					<div className="space-x-3">
						<span>🔅4.9</span>
						<span className="p-2 rounded-md shadow-xl">❤️</span>
					</div>
				</div>
				<div className="mb-5 bg-zinc-400 h-72" />
				<div className="flex flex-col">
					<span className="text-xl font-medium">Swoon Lounge</span>
					<span className="text-xs text-gray-500">Chair</span>
					<div className="flex items-center justify-between mt-3 mb-5">
						<div className="space-x-2">
							<button className="w-5 h-5 transition bg-yellow-500 bg-opacity-50 rounded-full focus:ring-2 ring-offset-2 ring-yellow-500" />
							<button className="w-5 h-5 transition bg-indigo-500 bg-opacity-50 rounded-full focus:ring-2 ring-offset-2 ring-indigo-500" />
							<button className="w-5 h-5 transition bg-teal-500 bg-opacity-50 rounded-full focus:ring-2 ring-offset-2 ring-teal-500" />
						</div>
						<div className="flex items-center space-x-5">
							<button className="p-1.5 rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 font-medium text-xl text-gray-500">
								-
							</button>
							<span>1</span>
							<button className="p-1.5 rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 font-medium text-xl text-gray-500">
								+
							</button>
						</div>
					</div>
					<div className="flex items-center justify-between ">
						<span className="text-2xl font-medium">$450</span>
						<button className="px-8 py-2 text-xs text-center text-white bg-blue-500 rounded-lg">
							Add to cart
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
