// Get unique id for tasks 
// Get unique id
export function generateUUID() {
      return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
      );
    }



// Get Id for projects 
// Project ID with closure;
export const get_id =  (function()
{
    let new_id = 0;
    return function new_function()
    {
        new_id ++;
        return new_id;
    }
})();

