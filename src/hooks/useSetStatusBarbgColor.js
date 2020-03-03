// import {useEffect} from 'react';
// import {useTheme} from '@react-navigation/native';

// let statusBarBgColor1;
// export default function useSetStatusBarbgColor(dispatch) {
//   const {
//     colors: {statusBarBgColor},
//   } = useTheme();
//   useEffect(() => {
//     statusBarBgColor1 = statusBarBgColor;
//     dispatch({
//       type: 'update/theme',
//       payload: {
//         statusBarBgColor: '#eaeaea',
//       },
//     });
//     return () => {
//       dispatch({
//         type: 'update/theme',
//         payload: {
//           statusBarBgColor: statusBarBgColor1,
//         },
//       });
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);
// }
