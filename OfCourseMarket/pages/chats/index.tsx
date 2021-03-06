import { NextPage } from "next";

const Chats: NextPage = () => {
	return (
		<div className="py-10 divide-y-[1px]">
			{[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((_, i) => (
				<div
					key={i}
					className="flex items-center px-4 py-3 space-x-3 cursor-pointer"
				>
					<div className="w-12 h-12 rounded-full bg-slate-300" />
					<div>
						<p className="text-gray-700">Steve Jebs</p>
						<p className="text-sm text-gray-500">
							See you tomorrow in the corner at 2!
						</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Chats;
