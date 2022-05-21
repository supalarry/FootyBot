import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://iworrsokrlxbtsdwptev.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

async function getHeadsups() {
    let { data: headsups, error } = await supabase.from('headsups').select('*');

    return headsups;
}

async function addHeadsup(type: string, text: string) {
    const { data, error } = await supabase.from('headsups').insert([{ type, text }]);
    console.log(error);
    return data;
}

export { getHeadsups, addHeadsup };
