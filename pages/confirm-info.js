import { initializeStore } from '@/store/store';
import { personalInfo, profileInfo, notifs } from '@/utils/confirmationInfo';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { useEffect, useCallback, useState } from 'react';

const ConfirmInfo = () => {
	const [isMounted, setIsMounted] = useState(true);
	const { info } = initializeStore();

	const router = useRouter();

	const { handleSubmit } = useForm({ defaultValues: info });

	const handleSubmitForm = (formValues) => {
		console.log(formValues);
		// updateInfo(formValues);
		router.push('/');
	};

	const handleCheckInfo = useCallback(async () => {
		if (isMounted) {
			!info.push_notifications && router.back();
			console.log(info);
		}
	}, [isMounted, router, info]);

	useEffect(() => {
		handleCheckInfo();
		return () => {
			setIsMounted(false);
		};
	}, [handleCheckInfo]);

	return (
		<>
			<Head>
				<title>Confirm Data</title>
				<meta name="description" content="confirm your setup" />
			</Head>
			<main className={`container items-center justify-between mx-auto`}>
				<form
					onSubmit={handleSubmit(handleSubmitForm)}
					className="lg:w-[60%] md:w-full w-full mx-auto bg-neutral-50"
				>
					<div className="space-y-12 p-14">
						<div className="border-b border-gray-900/10 pb-12">
							<p className="text-2xl font-semibold leading-7 text-gray-900">
								Confirmation
							</p>
							<p className="mt-1 text-lg leading-6 text-gray-600">
								Is your setup complete?
							</p>
							<div className="mt-10 space-y-16">
								<fieldset>
									<div className="flex">
										<legend className="text-xl font-semibold leading-6 text-gray-900 mr-2">
											Personal Info
										</legend>
										<button
											type="button"
											onClick={() => router.push('/')}
											className="rounded-md bg-gray-500  px-3 py-1 text-sm font-semibold text-neutral-50 shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
										>
											Edit
										</button>
									</div>

									<div className="mt-6 space-y-6">
										{personalInfo(info).map(({ label, value }, idx) => (
											<p key={idx} className="text-gray-900 text-lg">
												{value && `${label}: ${value}`}
											</p>
										))}
									</div>
								</fieldset>
								{/*  */}
								<fieldset>
									<div className="flex">
										<legend className="text-xl font-semibold leading-6 text-gray-900 mr-2">
											Profile Info
										</legend>
										<button
											type="button"
											onClick={() => router.push('/profile-info')}
											className="rounded-md bg-gray-500  px-3 py-1 text-sm font-semibold text-neutral-50 shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
										>
											Edit
										</button>
									</div>

									<div className="mt-6 space-y-6">
										{profileInfo(info).map(({ label, value }, idx) => (
											<p key={idx} className="text-gray-900 text-lg">
												{label}: {value}
											</p>
										))}
									</div>
								</fieldset>
								{/*  */}
								<fieldset>
									<div className="flex">
										<legend className="text-xl font-semibold leading-6 text-gray-900 mr-2">
											Notifications of choice
										</legend>
										<button
											type="button"
											onClick={() => router.push('/notifs-method')}
											className="rounded-md bg-gray-500  px-3 py-1 text-sm font-semibold text-neutral-50 shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
										>
											Edit
										</button>
									</div>

									<div className="mt-6 space-y-6">
										{notifs(info).map(({ label, value }, idx) => (
											<p key={idx} className="text-gray-900 text-lg">
												{label}:{' '}
												{typeof value === 'object'
													? value.map((v, idx) => (
															<Fragment key={idx}>
																<br />
																<span>- {v}</span>
															</Fragment>
													  ))
													: value}
											</p>
										))}
									</div>
								</fieldset>
							</div>
						</div>
					</div>

					<div className="pb-10 flex items-center justify-end gap-x-6 mr-14">
						<button
							type="submit"
							className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Save
						</button>
					</div>
				</form>
			</main>
		</>
	);
};

export default ConfirmInfo;
