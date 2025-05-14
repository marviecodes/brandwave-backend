const supabase = require("../lib/supabase");

const logEvent = async (tableName, payload) => {
  const { error } = await supabase.from(tableName).insert([payload]);
  if (error) {
    console.error(`Logging to ${tableName} failed:`, error.message);
  }
};

module.exports = logEvent;
