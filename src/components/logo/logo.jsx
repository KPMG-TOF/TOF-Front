import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';

import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {
  const theme = useTheme();

  const PRIMARY_LIGHT = theme.palette.primary.light;

  const PRIMARY_MAIN = theme.palette.primary.main;

  const PRIMARY_DARK = theme.palette.primary.dark;

  // OR using local (public folder)
  // -------------------------------------------------------
  // const logo = (
  //   <Box
  //     component="img"
  //     src="/logo/logo_single.svg" => your path
  //     sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}
  //   />
  // );

  const logo = (
    <Box
      ref={ref}
      component="div"
      sx={{
        width: 100,
        height: 100,
        display: 'inline-flex',
        ...sx,
      }}
      {...other}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1024.000000 1024.000000">
        <defs>
          <linearGradient id="BG1" x1="100%" x2="50%" y1="9.946%" y2="50%">
            <stop offset="0%" stopColor={PRIMARY_DARK} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>

          <linearGradient id="BG2" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor={PRIMARY_LIGHT} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>

          <linearGradient id="BG3" x1="50%" x2="50%" y1="0%" y2="100%">
            <stop offset="0%" stopColor={PRIMARY_LIGHT} />
            <stop offset="100%" stopColor={PRIMARY_MAIN} />
          </linearGradient>
        </defs>
        <g transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
        <path d="M2434 7040 c-50 -20 -54 -39 -54 -271 0 -216 0 -216 25 -243 l24 -26
            316 0 315 0 0 -1084 c0 -973 2 -1086 16 -1100 13 -14 51 -16 259 -16 241 0
            244 0 259 22 14 20 16 92 17 573 l0 550 19 -90 c25 -118 54 -202 103 -300 120
            -242 306 -447 512 -567 138 -79 348 -152 487 -167 94 -11 323 -6 413 9 159 25
            374 107 485 185 228 158 368 319 475 549 84 179 120 323 131 522 14 267 -35
            490 -163 737 -61 116 -187 283 -274 361 -128 115 -302 218 -460 270 -171 57
            -258 69 -459 63 -163 -4 -184 -7 -303 -41 -112 -31 -272 -99 -301 -127 -21
            -20 -26 -6 -26 74 0 136 105 122 -919 124 -482 1 -886 -2 -897 -7z m1426 -547
            c0 -5 -14 -28 -31 -53 -84 -124 -175 -351 -204 -514 -12 -65 -13 -44 -14 252
            l-1 322 125 0 c69 0 125 -3 125 -7z m1222 -29 c135 -31 242 -91 358 -200 105
            -100 163 -193 217 -349 27 -80 47 -258 38 -350 -20 -200 -139 -419 -293 -540
            -140 -110 -267 -155 -462 -162 -115 -4 -148 -2 -220 16 -216 53 -392 197 -504
            411 -143 271 -97 669 103 907 123 146 300 248 481 276 66 11 217 6 282 -9z"/>
            <path d="M6335 7040 c-53 -21 -50 58 -53 -1344 -1 -716 0 -1315 3 -1333 11
            -63 12 -63 279 -63 175 0 245 3 254 12 9 9 12 142 12 535 l0 523 438 0 438 0
            27 28 27 28 0 220 0 220 -28 27 -28 27 -437 0 -437 0 0 290 0 290 519 0 518 0
            27 26 26 27 0 222 0 223 -31 26 -31 26 -751 -1 c-414 0 -761 -4 -772 -9z"/>
            <path d="M6985 3356 c-75 -46 -100 -123 -63 -196 31 -61 77 -90 142 -90 134 0
            205 129 132 240 -47 71 -136 91 -211 46z m152 -36 c21 -13 36 -32 44 -59 14
            -47 7 -81 -24 -117 -19 -22 -34 -28 -80 -32 -54 -4 -58 -3 -92 31 -30 30 -35
            42 -35 82 0 40 5 52 34 81 28 28 41 34 78 34 25 0 56 -8 75 -20z"/>
            <path d="M7010 3225 c0 -63 3 -84 13 -82 6 1 14 13 17 26 7 34 24 36 40 6 16
            -31 50 -34 50 -5 0 11 -7 23 -15 27 -14 5 -14 8 1 24 36 40 -5 89 -77 89 l-29
            0 0 -85z m75 25 c0 -8 -10 -16 -22 -18 -18 -3 -23 2 -23 18 0 16 5 21 23 18
            12 -2 22 -10 22 -18z"/>
            <path d="M6434 3335 c-67 -21 -97 -40 -151 -97 -90 -96 -129 -207 -121 -345 3
            -53 11 -85 36 -135 37 -76 83 -120 162 -157 50 -23 67 -26 175 -26 66 0 150 2
            188 4 59 4 68 7 72 25 14 68 55 368 55 403 0 10 -40 13 -175 13 l-175 0 0 -75
            0 -75 71 0 72 0 -7 -40 c-9 -57 -25 -79 -63 -86 -51 -10 -100 4 -140 39 -68
            60 -88 143 -59 241 41 136 160 185 284 115 l54 -30 54 41 c31 23 58 48 61 57
            11 28 -72 99 -143 122 -74 24 -184 27 -250 6z"/>
            <path d="M4026 3332 c-5 -8 -32 -154 -95 -522 -16 -91 -32 -177 -36 -192 l-7
            -28 96 0 c104 0 101 -2 110 60 13 82 44 231 50 237 9 9 5 14 90 -148 l76 -147
            118 -4 c64 -3 118 -4 120 -3 2 1 -47 93 -108 205 -60 111 -110 204 -110 207 0
            3 12 15 27 27 15 11 91 77 168 146 77 69 154 135 170 148 l30 23 -132 -4 c-73
            -2 -135 -6 -137 -8 -3 -2 -68 -67 -145 -143 -78 -77 -141 -135 -141 -129 0 6
            11 63 25 127 37 169 42 156 -69 156 -52 0 -97 -4 -100 -8z"/>
            <path d="M4795 3328 c-2 -7 -14 -62 -25 -122 -21 -106 -25 -126 -35 -183 -18
            -109 -59 -317 -72 -361 -23 -80 -19 -84 84 -79 l88 4 11 59 c6 32 14 73 18 89
            3 17 9 46 12 67 l6 36 127 4 c104 3 135 7 176 26 112 51 171 150 159 267 -11
            104 -62 170 -153 195 -55 15 -391 13 -396 -2z m330 -163 c37 -36 35 -97 -4
            -136 -28 -27 -34 -29 -110 -29 -91 0 -88 -4 -70 82 21 106 23 108 96 108 55 0
            67 -4 88 -25z"/>
            <path d="M5441 3168 c-50 -267 -101 -531 -108 -555 -5 -22 -3 -23 75 -23 l80
            0 10 48 c6 26 18 90 27 142 9 52 18 100 19 105 1 6 8 43 16 83 7 39 16 72 20
            72 3 0 11 -100 18 -222 6 -122 15 -225 20 -230 5 -5 31 -8 57 -6 l47 3 22 60
            c50 133 186 421 186 391 0 -9 -43 -236 -65 -344 -23 -113 -27 -107 65 -109 90
            -2 94 0 104 77 3 25 10 68 15 95 6 28 17 93 26 145 22 128 22 126 54 285 15
            77 26 143 24 148 -3 4 -59 5 -125 2 l-121 -5 -49 -112 c-27 -62 -63 -148 -80
            -190 -17 -43 -35 -78 -40 -78 -4 0 -8 88 -8 195 l0 195 -128 0 -128 0 -33
            -172z"/>
            <path d="M3152 3230 c-7 -12 -12 -59 -12 -125 l0 -105 -98 0 c-83 0 -102 -3
            -115 -18 -43 -47 -1 -72 120 -72 l93 0 0 -120 c0 -107 2 -122 20 -140 24 -24
            34 -25 54 -4 13 12 16 40 16 140 l0 124 40 0 40 0 0 -75 c0 -62 4 -79 20 -95
            11 -11 25 -20 30 -20 6 0 19 9 30 20 16 16 20 33 20 95 l0 75 103 0 c109 0
            127 7 127 47 0 34 -29 43 -133 43 l-95 0 -4 75 c-4 82 -18 108 -55 99 -30 -8
            -39 -42 -43 -161 0 -8 -15 -13 -40 -13 l-40 0 0 113 c0 75 -4 117 -12 125 -18
            18 -52 14 -66 -8z"/>  
        </g>
      </svg>
    </Box>
  );

  if (disabledLink) {
    return logo;
  }

  return (
    <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
      {logo}
    </Link>
  );
});

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default Logo;
