import Field from '@/components/element/Field';
import Input from '@/components/element/Input';
import { profileSchema } from '@/utils/validation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Head from 'next/head';
import { initializeStore } from '@/store/store';
import { resetProfile } from '@/utils/resetData';
import { useRouter } from 'next/router';
import { useEffect, useCallback, useState } from 'react';

const ProfileInfo = () => {
	const [isMounted, setIsMounted] = useState(true);
	const { info, updateInfo } = initializeStore();

	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({
		resolver: yupResolver(profileSchema),
		defaultValues: info
	});

	const handleSubmitForm = (formValues) => {
		console.log(formValues);
		updateInfo(formValues);
		// todo, use router to push to next page
	};

	const resetForm = () => {
		reset((formValues) => ({
			...formValues,
			...resetProfile
		}));
		updateInfo(resetProfile);
	};

	const handleCheckInfo = useCallback(async () => {
		if (isMounted) {
			Object.keys(info).length === 0 && router.push('/');
			console.log('profile');
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
				<title>Edit Profile</title>
				<meta name="description" content="Edit your profile" />
			</Head>

			<main className={`container items-center justify-between mx-auto`}>
				<form
					onSubmit={handleSubmit(handleSubmitForm)}
					className="lg:w-[60%] md:w-full w-full mx-auto bg-neutral-50"
				>
					<div className="space-y-12 p-14">
						<div className="border-b border-gray-900/10 pb-12">
							<h2 className="text-base font-semibold leading-7 text-gray-900">
								Profile
							</h2>
							<p className="mt-1 text-sm leading-6 text-gray-600">
								This information will be displayed publicly so be careful what
								you share.
							</p>

							<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
								<Field
									label="Username"
									error={errors.username}
									columnSize="sm:col-span-4"
								>
									<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
										<span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
											formify.com/
										</span>
										<Input
											{...register('username')}
											type="text"
											className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
											placeholder="janesmith"
										/>
									</div>
								</Field>

								<Field
									label="About"
									error={errors.about}
									columnSize="col-span-full"
								>
									<textarea
										rows={3}
										className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
										defaultValue={''}
										{...register('about')}
									/>
								</Field>

								<Field
									label="Cover photo"
									error={errors.cover_photo}
									columnSize="col-span-full"
								>
									<Input
										type="file"
										className="block w-full text-sm text-gray-800 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
										id="cover_photo"
										name="cover_photo"
										{...register('cover_photo')}
									/>
								</Field>
							</div>
						</div>
					</div>

					<div className="pb-10 flex items-center justify-end gap-x-6 mr-14">
						<button
							type="button"
							className="text-sm font-semibold leading-6 text-gray-900"
							onClick={resetForm}
						>
							Reset
						</button>
						<button
							type="button"
							className="text-sm font-semibold leading-6 text-gray-900"
							onClick={() => router.back()}
						>
							Back
						</button>
						<button
							type="submit"
							className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Next
						</button>
					</div>
				</form>
			</main>
		</>
	);
};

export default ProfileInfo;
