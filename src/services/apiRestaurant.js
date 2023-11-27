import supabase from './supabase';

export async function getMenu() {
  const { data: pizzas, error } = await supabase.from('pizzas').select('*');

  if (error) {
    console.error(error);
    throw new Error('Failed getting menu');
  }

  return pizzas;
}

export async function createOrder(newOrder) {
  const { data, error } = await supabase
    .from('orders')
    .insert([newOrder])
    .select();

  if (error) {
    console.error(error);
    throw new Error('Failed creating your order');
  }

  return data;
}

export async function getOrder(id) {
  const { data, error } = await supabase.from('orders').select().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('Failed creating your order');
  }

  return data;
}
