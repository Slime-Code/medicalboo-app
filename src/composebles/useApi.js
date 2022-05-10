/* eslint-disable linebreak-style */
import useSupabase from 'boot/supabase';
// import useAuthUser from './useAuthUser';
import { v4 as uuidv4 } from 'uuid';

export default function useApi() {
  const { supabase } = useSupabase();

  // const { user } = useAuthUser();

  const list = async (table) => {
    const { data, error } = await supabase
      .from(table)
      .select('*');
    if (error) throw error;
    return data;
  };

  const getById = async (table, id) => {
    const { data, error } = await supabase
      .from(table)
      .select('*')
      .eq('id', id);
    if (error) throw error;
    return data[0];
  };

  const getByField = async (table, field, value) => {
    const { data, error } = await supabase
      .from(table)
      .select('*')
      .eq(field, value);
    if (error) throw error;
    return data;
  };
  const getNotByField = async (table, field, value) => {
    const { data, error } = await supabase
      .from(table)
      .select('*').neq(field, value);
    if (error) throw error;
    return data;
  };

  const joinTables = async (origin, tables) => {

    const fields = tables.reduce((previousValue, currentValue, index) => {

      return `${previousValue.name}:${previousValue.foreign_key}(${previousValue.fields})` +
        ',' + `${currentValue.name}:${currentValue.foreign_key}(${currentValue.fields})`
    });


    const { data, error } = await supabase
      .from(origin)
      .select(`*,${fields}`)
    if (error) throw error;

    console.log(data)
    return data;
  };


  const post = async (table, form) => {
    const { data, error } = await supabase
      .from(table)
      .insert([
        {
          ...form,
          // user_id: user.value.id,
        },
      ]);
    if (error) throw error;
    return data;
  };

  const update = async (table, form) => {
    const { data, error } = await supabase
      .from(table)
      .update([
        { ...form },
      ])
      .match({ id: form.id });
    if (error) throw error;
    return data;
  };

  const remove = async (table, id) => {
    const { data, error } = await supabase
      .from(table)
      .delete()
      .match({ id });

    if (error) throw error;
    return data;
  };

  const removeWhere = async (table, field, id) => {
    const { data, error } = await supabase
      .from(table)
      .delete()
      .match({ [field]: id });

    if (error) throw error;
    return data;
  };

  const uplodImg = async (file, storage) => {

    const fileName = uuidv4()

    const { error } = await supabase
      .storage
      .from(storage)
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false
      })

    if (error) throw error

    const url = await getUrl(fileName, storage)

    return url

  }


  const getUrl = async (fileName, storage) => {

    const { publicURL, error } = await supabase
      .storage
      .from(storage)
      .getPublicUrl(fileName)

    if (error) throw error

    return publicURL

  }


  return {
    uplodImg,

    getUrl,
    getByField,
    getNotByField,
    list,
    getById,
    post,
    update,
    remove,
    removeWhere,
    joinTables
  };
}
