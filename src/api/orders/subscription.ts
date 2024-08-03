import {useQueryClient} from "@tanstack/react-query";
import {useEffect} from "react";
import {supabase} from "@/src/lib/supabaseClient";

export const useInsertOrderListener = () => {
    const queryClient = useQueryClient();

    useEffect(() => {

        const channels = supabase.channel('custom-insert-channel')
            .on(
                'postgres_changes',
                { event: 'INSERT', schema: 'public', table: 'orders' },
                (payload) => {
                    queryClient.invalidateQueries(['orders']);
                    console.log(payload);
                }
            )
            .subscribe()

        return () => {
            channels.unsubscribe();
        }
    }, [])
};

export const useUpdateOrderListener = (id: number) => {
    const queryClient = useQueryClient();

    useEffect(() => {
        const orders = supabase
            .channel('custom-filter-channel')
            .on(
                'postgres_changes',
                {
                    event: 'UPDATE',
                    schema: 'public',
                    table: 'orders',
                    filter: `id=eq.${id}`,
                },
                (payload) => {
                    queryClient.invalidateQueries(['orders', id])
                }
            )
            .subscribe();

        return () => {
            orders.unsubscribe();
        };
    }, []);
};