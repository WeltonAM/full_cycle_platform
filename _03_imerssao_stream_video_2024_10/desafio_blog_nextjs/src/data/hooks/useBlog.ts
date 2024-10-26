import { useContext } from 'react';
import ContextoBlog from '../context/ContextoBlog';

const useBlog = () => useContext(ContextoBlog);
export default useBlog;
