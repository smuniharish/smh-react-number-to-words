const isFinite = (value:any) =>{
  return !(typeof value !== 'number' || value !== value || value === Infinity || value === -Infinity);
}
export default isFinite