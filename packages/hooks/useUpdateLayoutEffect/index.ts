import { useLayoutEffect } from 'react';
import { createUpdateEffect } from '../utils/createUpdateEffect';

export default createUpdateEffect(useLayoutEffect);
