import { useEffect } from 'react';
import createUpdateEffect from '../utils/createUpdateEffect';

export const useUpdateEffect = createUpdateEffect(useEffect);

export default useUpdateEffect;
