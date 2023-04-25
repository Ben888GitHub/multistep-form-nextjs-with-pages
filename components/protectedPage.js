import { initializeStore } from '@/store/store';
import { useRouter } from 'next/router';

const ProtectedPage = ({ children }) => {
	const { info, updateInfo } = initializeStore();

	const router = useRouter();

	if (Object.keys(info).length === 0) {
		router.back();
	}

	return children;
};

export default ProtectedPage;
