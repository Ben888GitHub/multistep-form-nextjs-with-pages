export const NotifField = ({ children, label, description }) => {
	return (
		<div className="relative flex gap-x-3">
			<div className="flex h-6 items-center">{children}</div>
			<div className="text-sm leading-6">
				<label className="font-medium text-gray-900">{label}</label>
				<p className="text-gray-500">{description}</p>
			</div>
		</div>
	);
};

export const PushNotiField = ({ children, label }) => (
	<div className="flex items-center gap-x-3">
		{children}
		<label className="block text-sm font-medium leading-6 text-gray-900">
			{label}
		</label>
	</div>
);
