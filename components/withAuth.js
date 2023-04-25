import { initializeStore } from '@/store/store';
import { useRouter } from 'next/router';

export default function withAuth(Component) {
	const ComponentWithAuth = (props) => {
		const router = useRouter();

		const { info, updateInfo } = initializeStore();

		if (Object.keys(info).length === 0) {
			router.push('/');
		}
		return <Component {...props} />;
	};
	return ComponentWithAuth;
}
