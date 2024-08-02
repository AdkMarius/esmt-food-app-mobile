import { useQuery } from '@tanstack/react-query';
import { readDayMenu } from '@/src/api/products';
import { Tables } from '@/src/lib/types';

const fetchDayMenu = async () => {
    const res = await readDayMenu();
    return res.data as Tables<'products'>;
};

const useDayMenu = () => {
    return useQuery({
        queryKey: ['dayMenu'],
        queryFn: fetchDayMenu,
    });
};

export default useDayMenu;
