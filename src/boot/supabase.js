/* eslint-disable */
import { createClient } from '@supabase/supabase-js'
import useAuthUser from 'src/composebles/useAuthUser'

const supabaseUrl = 'https://bedvvcrqehulfocxohvt.supabase.co'

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJlZHZ2Y3JxZWh1bGZvY3hvaHZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDY1OTIwNjQsImV4cCI6MTk2MjE2ODA2NH0.TlR14ypEFye2cP7yJ67jRn5uYIn1vbq0M0j3jKFyINw'

const supabase = createClient(supabaseUrl, supabaseKey)

// se houver alguma modificação no estado do usuário logado:
supabase.auth.onAuthStateChange((event, session) => {
  const { user } = useAuthUser()

  user.value = session?.user || null
})
console.log('init supabase', supabase)
export default function useSupabase () {
  return { supabase }
}
