// Mushroom.js v1.0.1
((G) => {
    // Color Lab
    class ColorLab {
        //-------------------
        // private variables 
        //-------------------
        #COLORS_MAP;

        //------------
        // constructor
        //------------
        constructor() {
            this.version = '1.0.1';
            this.#COLORS_MAP = new Map(
                Object.entries(this.#COLORS).map(([k, v]) => [this.#trimCase(k), v])
            );
        }

        //--------
        // Colors
        //--------
        #COLORS = {
            "AliceBlue": "#F0F8FF",
            "AntiqueWhite": "#FAEBD7",
            "Aqua": "#00FFFF",
            "Aquamarine": "#7FFFD4",
            "Azure": "#F0FFFF",
            "Beige": "#F5F5DC",
            "Bisque": "#FFE4C4",
            "Black": "#000000",
            "BlanchedAlmond": "#FFEBCD",
            "Blue": "#0000FF",
            "BlueViolet": "#8A2BE2",
            "Brown": "#A52A2A",
            "BurlyWood": "#DEB887",
            "CadetBlue": "#5F9EA0",
            "Chartreuse": "#7FFF00",
            "Chocolate": "#D2691E",
            "Coral": "#FF7F50",
            "CornflowerBlue": "#6495ED",
            "Cornsilk": "#FFF8DC",
            "Crimson": "#DC143C",
            "Cyan": "#00FFFF",
            "DarkBlue": "#00008B",
            "DarkCyan": "#008B8B",
            "DarkGoldenRod": "#B8860B",
            "DarkGray": "#A9A9A9",
            "DarkGrey": "#A9A9A9",
            "DarkGreen": "#006400",
            "DarkKhaki": "#BDB76B",
            "DarkMagenta": "#8B008B",
            "DarkOliveGreen": "#556B2F",
            "DarkOrange": "#FF8C00",
            "DarkOrchid": "#9932CC",
            "DarkRed": "#8B0000",
            "DarkSalmon": "#E9967A",
            "DarkSeaGreen": "#8FBC8F",
            "DarkSlateBlue": "#483D8B",
            "DarkSlateGray": "#2F4F4F",
            "DarkSlateGrey": "#2F4F4F",
            "DarkTurquoise": "#00CED1",
            "DarkViolet": "#9400D3",
            "DeepPink": "#FF1493",
            "DeepSkyBlue": "#00BFFF",
            "DimGray": "#696969",
            "DimGrey": "#696969",
            "DodgerBlue": "#1E90FF",
            "FireBrick": "#B22222",
            "FloralWhite": "#FFFAF0",
            "ForestGreen": "#228B22",
            "Fuchsia": "#FF00FF",
            "Gainsboro": "#DCDCDC",
            "GhostWhite": "#F8F8FF",
            "Gold": "#FFD700",
            "GoldenRod": "#DAA520",
            "Gray": "#808080",
            "Grey": "#808080",
            "Green": "#008000",
            "GreenYellow": "#ADFF2F",
            "HoneyDew": "#F0FFF0",
            "HotPink": "#FF69B4",
            "IndianRed": "#CD5C5C",
            "Indigo": "#4B0082",
            "Ivory": "#FFFFF0",
            "Khaki": "#F0E68C",
            "Lavender": "#E6E6FA",
            "LavenderBlush": "#FFF0F5",
            "LawnGreen": "#7CFC00",
            "LemonChiffon": "#FFFACD",
            "LightBlue": "#ADD8E6",
            "LightCoral": "#F08080",
            "LightCyan": "#E0FFFF",
            "LightGoldenRodYellow": "#FAFAD2",
            "LightGray": "#D3D3D3",
            "LightGrey": "#D3D3D3",
            "LightGreen": "#90EE90",
            "LightPink": "#FFB6C1",
            "LightSalmon": "#FFA07A",
            "LightSeaGreen": "#20B2AA",
            "LightSkyBlue": "#87CEFA",
            "LightSlateGray": "#778899",
            "LightSlateGrey": "#778899",
            "LightSteelBlue": "#B0C4DE",
            "LightYellow": "#FFFFE0",
            "Lime": "#00FF00",
            "LimeGreen": "#32CD32",
            "Linen": "#FAF0E6",
            "Magenta": "#FF00FF",
            "Maroon": "#800000",
            "MediumAquaMarine": "#66CDAA",
            "MediumBlue": "#0000CD",
            "MediumOrchid": "#BA55D3",
            "MediumPurple": "#9370DB",
            "MediumSeaGreen": "#3CB371",
            "MediumSlateBlue": "#3CB371",
            "MediumSpringGreen": "#00FA9A",
            "MediumTurquoise": "#48D1CC",
            "MediumVioletRed": "#C71585",
            "MidnightBlue": "#191970",
            "MintCream": "#F5FFFA",
            "MistyRose": "#FFE4E1",
            "Moccasin": "#FFE4B5",
            "NavajoWhite": "#FFDEAD",
            "Navy": "#000080",
            "OldLace": "#FDF5E6",
            "Olive": "#808000",
            "OliveDrab": "#6B8E23",
            "Orange": "#FFA500",
            "OrangeRed": "#FF4500",
            "Orchid": "#DA70D6",
            "PaleGoldenRod": "#EEE8AA",
            "PaleGreen": "#98FB98",
            "PaleTurquoise": "#AFEEEE",
            "PaleVioletRed": "#DB7093",
            "PapayaWhip": "#FFEFD5",
            "PeachPuff": "#FFDAB9",
            "Peru": "#CD853F",
            "Pink": "#FFC0CB",
            "Plum": "#DDA0DD",
            "PowderBlue": "#B0E0E6",
            "Purple": "#800080",
            "RebeccaPurple": "#663399",
            "Red": "#FF0000",
            "RosyBrown": "#BC8F8F",
            "RoyalBlue": "#4169E1",
            "SaddleBrown": "#8B4513",
            "Salmon": "#FA8072",
            "SandyBrown": "#F4A460",
            "SeaGreen": "#2E8B57",
            "SeaShell": "#FFF5EE",
            "Sienna": "#A0522D",
            "Silver": "#C0C0C0",
            "SkyBlue": "#87CEEB",
            "SlateBlue": "#6A5ACD",
            "SlateGray": "#708090",
            "SlateGrey": "#708090",
            "Snow": "#FFFAFA",
            "SpringGreen": "#00FF7F",
            "SteelBlue": "#4682B4",
            "Tan": "#D2B48C",
            "Teal": "#008080",
            "Thistle": "#D8BFD8",
            "Tomato": "#FF6347",
            "Turquoise": "#40E0D0",
            "Violet": "#EE82EE",
            "Wheat": "#F5DEB3",
            "White": "#FFFFFF",
            "WhiteSmoke": "#F5F5F5",
            "Yellow": "#FFFF00",
            "YellowGreen": "#9ACD32"
        };

        //-----------
        // Harmonies
        //-----------
        #H = {
            'analogous': [0, 30, -30],
            'complementary': [0, 180],
            'tetradic': [0, 60, 180, 240],
            'compound': [0, 150, -150],
            'split-complementary': [0, 30, 180, 210],
            'triadic': [0, 120, -120],
            'square': [0, 90, -90, 180],
            'monochromatic': [0],
        }

        //--------
        // RegExp
        //--------
        #R = {
            // input 
            hex: /^#([a-f\d]{3}|[a-f\d]{4}|[a-f\d]{6}|[a-f\d]{8})$/i,
            rgb: /^rgba?\(\s*(\d+(\.\d+)?)\s*,?\s*(\d+(\.\d+)?)\s*,?\s*(\d+(\.\d+)?)\s*(?:\/\s*|,\s*)?([^\s)]+)?\s*\)$/i,
            hsl: /^hsla?\(\s*(\d+(\.\d+)?)\s*(deg)?\s*,?\s*(\d+(\.\d+)?)%?\s*,?\s*(\d+(\.\d+)?)%?\s*(?:\/\s*|,\s*)?([^\s)]+)?\s*\)$/i,
            hsv: /^hsva?\(\s*(\d+(\.\d+)?)\s*(deg)?\s*,?\s*(\d+(\.\d+)?)%?\s*,?\s*(\d+(\.\d+)?)%?\s*(?:\/\s*|,\s*)?([^\s)]+)?\s*\)$/i,
            cmyk: /^cmyk\(\s*(\d+(?:\.\d+)?%?)\s*,?\s*(\d+(?:\.\d+)?%?)\s*,?\s*(\d+(?:\.\d+)?%?)\s*,?\s*(\d+(?:\.\d+)?%?)\s*\)$/i,
            // normalized match
            nHex: /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
            nRgb: /^rgb\(\s*(\d{1,3})\s+(\d{1,3})\s+(\d{1,3})\s*\/\s*(\d*\.?\d+)\s*\)$/i,
            nHsl: /^hsl\(\s*(\d{1,3})deg\s+(\d{1,3})%\s+(\d{1,3})%\s*\/\s*(\d*\.?\d+)\s*\)$/i,
            nHsv: /^hsv\(\s*(\d{1,3})deg\s+(\d{1,3})%\s+(\d{1,3})%\s*\/\s*(\d*\.?\d+)\s*\)$/i,
            nCmyk: /^cmyk\(\s*(\d{1,3})%\s+(\d{1,3})%\s+(\d{1,3})%\s+(\d{1,3})%\s*\)$/i,
        }

        //-----------
        // Normalize 
        //-----------
        #N = {
            keyword: (input) => {
                const T = this.#trimCase;
                input = T(input);
                if (this.#COLORS_MAP.has(input)) {
                    return Object.keys(this.#COLORS).find(name => T(name) === input);
                }
                return undefined;
            },
            hex: (input) => {
                const regex = this.#R.hex;
                if (!regex.test(input)) return undefined;
                let hex = input.slice(1).toUpperCase();
                if (hex.length === 3) {
                    hex = hex.replace(/./g, x => x + x) + 'ff';
                } else if (hex.length === 4) {
                    hex = hex.replace(/./g, x => x + x);
                } else if (hex.length === 6) {
                    hex += 'FF';
                }
                return `#${hex.toUpperCase()}`;
            },
            rgb: (input) => {
                const regex = this.#R.rgb;
                let match = input.match(regex);
                if (!match) return undefined;
                let r = parseInt(match[1]);
                let g = parseInt(match[3]);
                let b = parseInt(match[5]);
                let a = match[7] !== undefined ? parseFloat(match[7]) : 1;
                if (r > 255 || g > 255 || b > 255 || a < 0 || a > 1) return undefined;
                return `rgb(${r} ${g} ${b} / ${a})`;
            },
            hsl: (input) => {
                const regex = this.#R.hsl;
                let match = input.match(regex);
                if (!match) return undefined;
                let h = Math.round(parseFloat(match[1]));
                let s = Math.round(parseFloat(match[4]));
                let l = Math.round(parseFloat(match[6]));
                let a = match[8] !== undefined ? parseFloat(match[8]) : 1;
                if (h < 0 || h > 360 || s < 0 || s > 100 || l < 0 || l > 100 || a < 0 || a > 1) return undefined;
                return `hsl(${h}deg ${s}% ${l}% / ${a})`;
            },
            hsv: (input) => {
                const regex = this.#R.hsv;
                let match = input.match(regex);
                if (!match) return undefined;
                let h = Math.round(parseFloat(match[1]));
                let s = Math.round(parseFloat(match[4]));
                let v = Math.round(parseFloat(match[6]));
                let a = match[8] !== undefined ? parseFloat(match[8]) : 1;
                if (h < 0 || h > 360 || s < 0 || s > 100 || v < 0 || v > 100 || a < 0 || a > 1) return undefined;
                return `hsv(${h}deg ${s}% ${v}% / ${a})`;
            },
            cmyk: (input) => {
                const regex = this.#R.cmyk;
                let match = input.match(regex);
                if (!match) return undefined;
                let c = parseFloat(match[1]);
                let m = parseFloat(match[2]);
                let y = parseFloat(match[3]);
                let k = parseFloat(match[4]);
                if ([c, m, y, k].some(x => x < 0 || x > 100)) return undefined;
                return `cmyk(${c}% ${m}% ${y}% ${k}%)`;
            },
        }

        //----------
        // Channels
        //----------
        #C = {
            hex: (input) => {
                input = this.#N.hex(input);
                if (!input) return undefined;
                let match = input.match(this.#R.nHex);
                if (!match) return undefined;
                let R = match[1].toUpperCase();
                let G = match[2].toUpperCase();
                let B = match[3].toUpperCase();
                let A = match[4].toUpperCase();
                return { R, G, B, A };
            },
            rgb: (input) => {
                input = this.#N.rgb(input);
                if (!input) return undefined;
                let match = input.match(this.#R.nRgb);
                if (!match) return undefined;
                let R = parseInt(match[1]);
                let G = parseInt(match[2]);
                let B = parseInt(match[3]);
                let A = parseFloat(parseFloat(match[4]).toFixed(2));
                return { R, G, B, A };
            },
            hsl: (input) => {
                input = this.#N.hsl(input);
                if (!input) return undefined;
                let match = input.match(this.#R.nHsl);
                if (!match) return undefined;
                let H = parseInt(match[1]);
                let S = parseInt(match[2]);
                let L = parseInt(match[3]);
                let A = parseFloat(parseFloat(match[4]).toFixed(2));
                return { H, S, L, A };
            },
            hsv: (input) => {
                input = this.#N.hsv(input);
                if (!input) return undefined;
                let match = input.match(this.#R.nHsv);
                if (!match) return undefined;
                let H = parseInt(match[1]);
                let S = parseInt(match[2]);
                let V = parseInt(match[3]);
                let A = parseFloat(parseFloat(match[4]).toFixed(2));
                return { H, S, V, A };
            },
            cmyk: (input) => {
                input = this.#N.cmyk(input);
                if (!input) return undefined;
                let match = input.match(this.#R.nCmyk);
                if (!match) return undefined;
                let C = parseInt(match[1]);
                let M = parseInt(match[2]);
                let Y = parseInt(match[3]);
                let K = parseFloat(parseFloat(match[4]).toFixed(2));
                let A = 1;
                return { C, M, Y, K };
            },
        }

        //------------
        // Transforms
        //------------
        #T = {
            keyword: {
                keyword: (keyword) => {
                    return this.#splitPascalCase(this.#N.keyword(keyword));
                },
                hex: (keyword) => {
                    return this.#COLORS_MAP.get(this.#trimCase(keyword));
                },
                rgb: (keyword) => {
                    let hex = this.#T.keyword.hex(keyword);
                    return this.#T.hex.rgb(hex);
                },
                hsl: (keyword) => {
                    let hex = this.#T.keyword.hex(keyword);
                    return this.#T.hex.hsl(hex);
                },
                hsv: (keyword) => {
                    let hex = this.#T.keyword.hex(keyword);
                    return this.#T.hex.hsv(hex);
                },
                cmyk: (keyword) => {
                    let hex = this.#T.keyword.hex(keyword);
                    return this.#T.hex.cmyk(hex);
                },
            },
            hex: {
                keyword: (hex) => {
                    let rgb = this.#T.hex.rgb(hex);
                    return this.#T.rgb.keyword(rgb);
                },
                hex: (hex) => {
                    let channels = this.#C.hex(hex);
                    if (!channels) return undefined;
                    let { R, G, B, A } = channels;
                    return A === 'FF' ? '#' + R + G + B : '#' + R + G + B + A;
                },
                rgb: (hex) => {
                    let channels = this.#C.hex(hex);
                    if (!channels) return undefined;
                    let { R, G, B, A } = channels;
                    R = parseInt(R, 16);
                    G = parseInt(G, 16);
                    B = parseInt(B, 16);
                    A = this.#toFixed(parseInt(A, 16) / 255);
                    return A === 1 ? `rgb(${R} ${G} ${B})` : `rgb(${R} ${G} ${B} / ${A})`;
                },
                hsl: (hex) => {
                    let rgb = this.#T.hex.rgb(hex);
                    return this.#T.rgb.hsl(rgb);
                },
                hsv: (hex) => {
                    let rgb = this.#T.hex.rgb(hex);
                    return this.#T.rgb.hsv(rgb);
                },
                cmyk: (hex) => {
                    let rgb = this.#T.hex.rgb(hex);
                    return this.#T.rgb.cmyk(rgb);
                },
            },
            rgb: {
                keyword: (rgb) => {
                    let channels = this.#C.rgb(rgb);
                    if (!channels) return undefined;
                    let { R, G, B } = channels;
                    let closest = null;
                    let min = Infinity;
                    for (const [name, hex] of Object.entries(this.#COLORS)) {
                        const { R: r, G: g, B: b } = this.#C.rgb(this.#T.hex.rgb(hex));
                        const dist = (R - r) ** 2 + (G - g) ** 2 + (B - b) ** 2;
                        if (dist < min) {
                            min = dist;
                            closest = name;
                        }
                    }
                    return this.#splitPascalCase(closest);
                },
                hex: (rgb) => {
                    let channels = this.#C.rgb(rgb);
                    if (!channels) return undefined;
                    let { R, G, B, A } = channels;
                    R = this.#toString16(R);
                    G = this.#toString16(G);
                    B = this.#toString16(B);
                    A = this.#toString16(A * 255);
                    return A === 'FF' ? '#' + R + G + B : '#' + R + G + B + A;
                },
                rgb: (rgb) => {
                    let channels = this.#C.rgb(rgb);
                    if (!channels) return undefined;
                    let { R, G, B, A } = channels;
                    return A === 1 ? `rgb(${R} ${G} ${B})` : `rgb(${R} ${G} ${B} / ${A})`;
                },
                hsl: (rgb) => {
                    let channels = this.#C.rgb(rgb);
                    if (!channels) return undefined;
                    let { R, G, B, A } = channels;
                    R /= 255;
                    G /= 255;
                    B /= 255;
                    let max = Math.max(R, G, B);
                    let min = Math.min(R, G, B);
                    let H, S, L;
                    const delta = max - min;
                    if (max === min) {
                        H = 0;
                    } else if (R === max) {
                        H = (G - B) / delta;
                    } else if (G === max) {
                        H = 2 + (B - R) / delta;
                    } else if (B === max) {
                        H = 4 + (R - G) / delta;
                    }
                    L = (min + max) / 2;
                    if (max === min) {
                        S = 0;
                    } else if (L <= 0.5) {
                        S = delta / (max + min);
                    } else {
                        S = delta / (2 - max - min);
                    }
                    H = Math.round(Math.min(H * 60, 360));
                    H = (H < 0) ? H += 360 : H;
                    S = Math.round(S * 100);
                    L = Math.round(L * 100);
                    return A === 1 ? `hsl(${H} ${S}% ${L}%)` : `hsl(${H} ${S}% ${L}% / ${A})`;
                },
                hsv: (rgb) => {
                    let channels = this.#C.rgb(rgb);
                    if (!channels) return undefined;
                    let { R, G, B, A } = channels;
                    R /= 255;
                    G /= 255;
                    B /= 255;

                    let max = Math.max(R, G, B);
                    let min = Math.min(R, G, B);
                    let delta = max - min;

                    let H = 0;
                    let S = 0;
                    let V = max;

                    if (delta !== 0) {
                        if (max === R) {
                            H = (G - B) / delta;
                        } else if (max === G) {
                            H = 2 + (B - R) / delta;
                        } else {
                            H = 4 + (R - G) / delta;
                        }
                        H = Math.round((H * 60 + 360) % 360);
                        S = Math.round((delta / max) * 100);
                    }

                    V = Math.round(V * 100);

                    return A === 1 ? `hsv(${H} ${S}% ${V}%)` : `hsv(${H} ${S}% ${V}% / ${A})`;
                },
                cmyk: (rgb) => {
                    let channels = this.#C.rgb(rgb);
                    if (!channels) return undefined;
                    let { R, G, B } = channels;
                    R /= 255;
                    G /= 255;
                    B /= 255;

                    let K = Math.min(1 - R, 1 - G, 1 - B);
                    let C = (1 - R - K) / (1 - K) || 0;
                    let M = (1 - G - K) / (1 - K) || 0;
                    let Y = (1 - B - K) / (1 - K) || 0;

                    C = Math.round(C * 100);
                    M = Math.round(M * 100);
                    Y = Math.round(Y * 100);
                    K = Math.round(K * 100);

                    return `cmyk(${C}% ${M}% ${Y}% ${K}%)`;
                }
            },
            hsl: {
                keyword: (hsl) => {
                    let rgb = this.#T.hsl.rgb(hsl);
                    return this.#T.rgb.keyword(rgb);
                },
                hex: (hsl) => {
                    let rgb = this.#T.hsl.rgb(hsl);
                    return this.#T.rgb.hex(rgb);
                },
                rgb: (hsl) => {
                    let channels = this.#C.hsl(hsl);
                    if (!channels) return undefined;
                    let { H, S, L, A } = channels;
                    // hsl TO hex
                    H = H / 360;
                    S = S / 100;
                    L = L / 100;
                    let R, G, B;
                    let C = (1 - Math.abs(2 * L - 1)) * S;
                    let X = C * (1 - Math.abs((H * 6) % 2 - 1));
                    let M = L - C / 2;
                    switch (true) {
                        case (H >= 0 && H < 1 / 6):
                            R = C;
                            G = X;
                            B = 0;
                            break;
                        case (H >= 1 / 6 && H < 2 / 6):
                            R = X;
                            G = C;
                            B = 0;
                            break;
                        case (H >= 2 / 6 && H < 3 / 6):
                            R = 0;
                            G = C;
                            B = X;
                            break;
                        case (H >= 3 / 6 && H < 4 / 6):
                            R = 0;
                            G = X;
                            B = C;
                            break;
                        case (H >= 4 / 6 && H < 5 / 6):
                            R = X;
                            G = 0;
                            B = C;
                            break;
                        default:
                            R = C;
                            G = 0;
                            B = X;
                            break;
                    }
                    R = Math.round((R + M) * 255);
                    G = Math.round((G + M) * 255);
                    B = Math.round((B + M) * 255);

                    return A === 1 ? `rgb(${R} ${G} ${B})` : `rgb(${R} ${G} ${B} / ${A})`;
                },
                hsl: (hsl) => {
                    let channels = this.#C.hsl(hsl);
                    if (!channels) return undefined;
                    let { H, S, L, A } = channels;
                    return A === 1 ? `hsl(${H} ${S}% ${L}%)` : `hsl(${H} ${S}% ${L}% / ${A})`;
                },
                hsv: (hsl) => {
                    let rgb = this.#T.hsl.rgb(hsl);
                    return this.#T.rgb.hsv(rgb);
                },
                cmyk: (hsl) => {
                    let rgb = this.#T.hsl.rgb(hsl);
                    return this.#T.rgb.cmyk(rgb);
                },
            },
            hsv: {
                keyword: (hsv) => {
                    let rgb = this.#T.hsv.rgb(hsv);
                    return this.#T.rgb.keyword(rgb);
                },
                hex: (hsv) => {
                    let rgb = this.#T.hsv.rgb(hsv);
                    return this.#T.rgb.hex(rgb);
                },
                rgb: (hsv) => {
                    let channels = this.#C.hsv(hsv);
                    if (!channels) return undefined;
                    let { H, S, V, A } = channels;

                    H /= 60;
                    S /= 100;
                    V /= 100;
                    const hi = Math.floor(H) % 6;

                    const f = H - Math.floor(H);
                    const p = 255 * V * (1 - S);
                    const q = 255 * V * (1 - (S * f));
                    const t = 255 * V * (1 - (S * (1 - f)));
                    V *= 255;

                    let R, G, B;

                    switch (hi) {
                        case 0:
                            [R, G, B] = [V, t, p];
                            break;
                        case 1:
                            [R, G, B] = [q, V, p];
                            break;
                        case 2:
                            [R, G, B] = [p, V, t];
                            break;
                        case 3:
                            [R, G, B] = [p, q, V];
                            break;
                        case 4:
                            [R, G, B] = [t, p, V];
                            break;
                        case 5:
                            [R, G, B] = [V, p, q];
                            break;
                    }

                    return A === 1 ? `rgb(${R} ${G} ${B})` : `rgb(${R} ${G} ${B} / ${A})`;
                },
                hsl: (hsv) => {
                    let rgb = this.#T.hsv.rgb(hsv);
                    return this.#T.rgb.hsl(rgb);
                },
                hsv: (hsv) => {
                    let channels = this.#C.hsv(hsv);
                    if (!channels) return undefined;
                    let { H, S, V, A } = channels;
                    return A === 1 ? `hsv(${H} ${S}% ${V}%)` : `hsv(${H} ${S}% ${V}% / ${A})`;
                },
                cmyk: (hsv) => {
                    let rgb = this.#T.hsv.rgb(hsv);
                    return this.#T.rgb.cmyk(rgb);
                },
            },
            cmyk: {
                keyword: (cmyk) => {
                    let rgb = this.#T.cmyk.rgb(cmyk);
                    return this.#T.rgb.keyword(rgb);
                },
                hex: (cmyk) => {
                    let rgb = this.#T.cmyk.rgb(cmyk);
                    return this.#T.rgb.hex(rgb);
                },
                rgb: (cmyk) => {
                    let channels = this.#C.cmyk(cmyk);
                    if (!channels) return undefined;
                    let { C, M, Y, K, A } = channels;

                    C /= 100;
                    M /= 100;
                    Y /= 100;
                    K /= 100;

                    let R = 1 - Math.min(1, C * (1 - K) + K);
                    let G = 1 - Math.min(1, M * (1 - K) + K);
                    let B = 1 - Math.min(1, Y * (1 - K) + K);

                    R = Math.round(R * 255);
                    G = Math.round(G * 255);
                    B = Math.round(B * 255);

                    return A === 1 ? `rgb(${R} ${G} ${B})` : `rgb(${R} ${G} ${B} / ${A})`;
                },
                hsl: (cmyk) => {
                    let rgb = this.#T.cmyk.rgb(cmyk);
                    return this.#T.rgb.hsl(rgb);
                },
                hsv: (cmyk) => {
                    let rgb = this.#T.cmyk.rgb(cmyk);
                    return this.#T.rgb.hsv(rgb);
                },
                cmyk: (cmyk) => {
                    let channels = this.#C.cmyk(cmyk);
                    if (!channels) return undefined;
                    let { C, M, Y, K } = channels;
                    return `cmyk(${C}% ${M}% ${Y}% ${K}%)`;
                },
            },
            to: {
                keyword: (input) => {
                    let detect = this.detect(input);
                    return (!detect) ? undefined : this.#T[detect].keyword(input);
                },
                hex: (input) => {
                    let detect = this.detect(input);
                    return (!detect) ? undefined : this.#T[detect].hex(input);
                },
                rgb: (input) => {
                    let detect = this.detect(input);
                    return (!detect) ? undefined : this.#T[detect].rgb(input);
                },
                hsl: (input) => {
                    let detect = this.detect(input);
                    return (!detect) ? undefined : this.#T[detect].hsl(input);
                },
                hsv: (input) => {
                    let detect = this.detect(input);
                    return (!detect) ? undefined : this.#T[detect].hsv(input);
                },
                cmyk: (input) => {
                    let detect = this.detect(input);
                    return (!detect) ? undefined : this.#T[detect].cmyk(input);
                },
            }
        }

        //-----------------
        // private Methods 
        //-----------------
        #toString16(input) {
            let hex = input.toString(16).toUpperCase().split('.')[0];
            return hex.length == 1 ? '0' + hex : hex;
        }
        #toFixed(input1, input2 = 2) {
            return parseFloat(parseFloat(input1).toFixed(input2));
        }
        #splitPascalCase(input) {
            return input === undefined ? undefined : input.split(/(?=[A-Z])/).join(" ");
        }
        #trimCase(input) {
            return input.replace(/\s+/g, '').toLowerCase();
        }
        #channelsToString(type) {
            switch (type) {
                case 'hex': {
                    let { 1: r, 2: g, 3: b, 4: a = '' } = arguments;
                    if ([r, g, b].some(v => v === undefined)) return undefined;
                    r = r.length == 1 ? r + r : r;
                    g = g.length == 1 ? g + g : g;
                    b = b.length == 1 ? b + b : b;
                    a = a.length == 1 ? a + a : a;
                    return this.normalize('#' + r + g + b + a);
                }
                case 'rgb': {
                    let { 1: r, 2: g, 3: b, 4: a = '1' } = arguments;
                    if ([r, g, b, a].some(v => v === undefined)) return undefined;
                    return this.normalize(`rgb(${r} ${g} ${b} / ${a})`);
                }
                case 'hsl': {
                    let { 1: h, 2: s, 3: l, 4: a = '1' } = arguments;
                    if ([h, s, l, a].some(v => v === undefined)) return undefined;
                    return this.normalize(`hsl(${h} ${s}% ${l}% / ${a})`);
                }
                case 'hsv': {
                    let { 1: h, 2: s, 3: v, 4: a = '1' } = arguments;
                    if ([h, s, v, a].some(v => v === undefined)) return undefined;
                    return this.normalize(`hsv(${h} ${s}% ${v}% / ${a})`);
                }
                case 'cmyk': {
                    let { 1: c, 2: m, 3: y, 4: k = '1' } = arguments;
                    if ([c, m, y, k].some(v => v === undefined)) return undefined;
                    return this.normalize(`cmyk(${c}% ${m}% ${y}% ${k}%)`);
                }
                default: {
                    return undefined;
                }
            }
        }
        #channelsTransforms() {
            const types = ['hex', 'rgb', 'hsl', 'hsv', 'cmyk'];
            const result = {};
            for (const from of types) {
                result[from] = {};
                for (const to of types.concat('keyword')) {
                    if (from === to) continue;
                    result[from][to] = (...args) => {
                        const input = this.#channelsToString(from, ...args);
                        return (!input) ? undefined : this.#T[from][to](input);
                    };
                }
            }
            return result;
        }

        //---------
        // Methods 
        //---------
        /*** Color Converts ***/
        toHex(str) {
            return this.#T.to.hex(str);
        }
        toHexChannels(str) {
            return this.getChannels(this.#T.to.hex(str));
        }
        toRgb(str) {
            return this.#T.to.rgb(str);
        }
        toRgbChannels(str) {
            return this.getChannels(this.#T.to.rgb(str));
        }
        toHsl(str) {
            return this.#T.to.hsl(str);
        }
        toHslChannels(str) {
            return this.getChannels(this.#T.to.hsl(str));
        }
        toHsv(str) {
            return this.#T.to.hsv(str);
        }
        toHsvChannels(str) {
            return this.getChannels(this.#T.to.hsv(str));
        }
        toCmyk(str) {
            return this.#T.to.cmyk(str);
        }
        toCmykChannels(str) {
            return this.getChannels(this.#T.to.cmyk(str));
        }
        toAllFormat(str) {
            let f = (type) => this.#T.to[type](str);
            return {
                keyword: f('keyword'),
                hex: f('hex'),
                rgb: f('rgb'),
                hsl: f('hsl'),
                hsv: f('hsv'),
                cmyk: f('cmyk'),
            }
        }
        toAllFormatChannels(str) {
            let f = (type) => this.getChannels(this.#T.to[type](str));
            return {
                keyword: f('keyword'),
                hex: f('hex'),
                rgb: f('rgb'),
                hsl: f('hsl'),
                hsv: f('hsv'),
                cmyk: f('cmyk'),
            }
        }

        /*** Helper Method ***/
        normalize(str) {
            let detect = this.detect(str);
            return (!detect) ? undefined : this.#N[detect](str);
        }
        getChannels(str) {
            let detect = this.detect(str);
            return (!detect || detect === 'keyword') ? undefined : this.#C[detect](str);
        }
        isColor(str) {
            let detect = this.detect(str);
            return !detect ? false : !!this.#N[detect](str);
        }
        detect(input) {
            input = String(input).trim().toLowerCase();
            const colors = Array.from(this.#COLORS_MAP.keys());

            const trimmed = this.#trimCase(input);

            if (colors.includes(trimmed)) return "keyword";
            if (this.#R.hex.test(trimmed)) return "hex";
            if (this.#R.rgb.test(trimmed)) return "rgb";
            if (this.#R.hsl.test(trimmed)) return "hsl";
            if (this.#R.hsv.test(trimmed)) return "hsv";
            if (this.#R.cmyk.test(trimmed)) return "cmyk";

            return undefined;
        }
        getAllChannels(str) {
            return {
                rgb: this.getChannels(this.toRgb(str)),
                hsl: this.getChannels(this.toHsl(str)),
                hsv: this.getChannels(this.toHsv(str)),
                cmyk: this.getChannels(this.toCmyk(str)),
            };
        }
        randomColor() {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            return this.channels.rgb.hex(r, g, b);
        }

        /*** Getting Color Data ***/
        getAlpha(str) {
            return this.getChannels(this.toRgb(str)).A;
        }
        getHue(str) {
            return this.getChannels(this.toHsl(str)).H;
        }
        getSaturation(str) {
            return this.getChannels(this.toHsl(str)).S;
        }
        getLightness(str) {
            return this.getChannels(this.toHsl(str)).L;
        }
        getValue(str) {
            return this.getChannels(this.toHsv(str)).V;
        }
        getRed(str) {
            return this.getChannels(this.toRgb(str)).R;
        }
        getGreen(str) {
            return this.getChannels(this.toRgb(str)).G;
        }
        getBlue(str) {
            return this.getChannels(this.toRgb(str)).B;
        }
        getCyan(str) {
            return this.getChannels(this.toCmyk(str)).C;
        }
        getMagenta(str) {
            return this.getChannels(this.toCmyk(str)).M;
        }
        getYellow(str) {
            return this.getChannels(this.toCmyk(str)).Y;
        }
        getKey(str) {
            return this.getChannels(this.toCmyk(str)).K;
        }

        /*** Safe Web Color ***/
        getNearestColor(str) {
            return this.#T.to.keyword(str);
        }

        /*** Contrast ***/
        getContrast(color1, color2) {
            const L = (color) => {
                const rgb = this.getChannels(this.toRgb(color));
                if (!rgb) return 0;

                const channel = (c) => {
                    const n = c / 255;
                    return n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4);
                };

                const R = channel(rgb.R);
                const G = channel(rgb.G);
                const B = channel(rgb.B);

                return 0.2126 * R + 0.7152 * G + 0.0722 * B;
            };
            const L1 = L(color2);
            const L2 = L(color1);
            const ratio = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
            return ratio.toFixed(2);
        }
        getContrastLevel(ratio) {
            ratio = parseFloat(ratio);
            if (ratio >= 7) return 'AAA';
            if (ratio >= 4.5) return 'AA';
            if (ratio >= 3) return 'A';
            return 'Fail';
        }
        getBestContrastColor(bgColor) {
            const white = '#FFFFFF';
            const black = '#000000';

            const contrastWithWhite = this.getContrast(bgColor, white);
            const contrastWithBlack = this.getContrast(bgColor, black);

            return contrastWithWhite >= contrastWithBlack ? white : black;
        }

        /*** Color Harmonies ***/
        getHarmonies(str) {
            const channels = this.getChannels(this.toHsl(str));
            if (!channels) return undefined;

            const { H, S, L, A } = channels;
            const result = {};

            for (const [name, deltas] of Object.entries(this.#H)) {
                const arr = deltas.map(d => {
                    const newHue = (H + d + 360) % 360;
                    return this.channels.hsl.hex(newHue, S, L, A);
                });

                result[name] = arr;
            }

            return result;
        }

        /*** Color Shading ***/
        getTints(color, ratio = 0.5) {
            const c = this.getChannels(this.toHsl(color));
            if (!c) return undefined;
            const { H, S, L, A } = c;
            const newL = L + (100 - L) * ratio;
            return this.channels.hsl.hex(H, S, newL, A);
        }
        getShades(color, ratio = 0.5) {
            const c = this.getChannels(this.toHsl(color));
            if (!c) return undefined;
            const { H, S, L, A } = c;
            const newL = L * (1 - ratio);
            return this.channels.hsl.hex(H, S, newL, A);
        }
        getTones(color, ratio = 0.5) {
            const c = this.getChannels(this.toHsl(color));
            if (!c) return undefined;
            const { H, S, L, A } = c;
            const newS = S * (1 - ratio);
            return this.channels.hsl.hex(H, newS, L, A);
        }

        /*** Color Mixing ***/
        mixColor(color1, color2, ratio = 0.5) {
            const a = this.getChannels(this.toRgb(color1));
            const b = this.getChannels(this.toRgb(color2));
            if (!a || !b) return undefined;

            const R = a.R + (b.R - a.R) * ratio;
            const G = a.G + (b.G - a.G) * ratio;
            const B = a.B + (b.B - a.B) * ratio;
            const A = a.A + (b.A - a.A) * ratio;

            return this.channels.rgb.hex(R, G, B, A);
        }

        //----------
        // property 
        //----------
        get convert() {
            return this.#T;
        }
        get channels() {
            return this.#channelsTransforms();
        }
    }

    // Main Class
    class Mushroom {
        //-------------------------
        //    primary Variables 
        //-------------------------
        #COLOR_LAB = new ColorLab();
        #EVENT_TARGET = new EventTarget();
        #SYSTEM_THEME = window.matchMedia("(prefers-color-scheme:dark)");
        #ACCENT_NAMES = ['primary', 'secondary', 'tertiary', 'quaternary'];
        #COLOR_NAMES = ['red', 'orange', 'yellow', 'lime', 'green', 'springgreen', 'skyblue', 'royalblue', 'blue', 'indigo', 'purple', 'pink'];
        #DEFAULT = {
            PRIMARY: {
                id: 'MUSHROOM',
                comment: 'MUSHROOM OUTPUT',
                sprout: true,
                debug: true,
                mainRoot: ':root',
            },
            ROOTS: {
                color: 'RoyalBlue',
                theme: 'auto',
                harmony: 'square',
                contrast: 50,
                surfaceColor: 'primary',
                mainPalette: true,
                subPalette: true,
                colorLoopPalette: true,
                subColorLoopPalette: false,
                reverseSubPalettes: false,
                fixedSubPalettes: false,
                parts: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
                prefix: '',
                suffix: '',
                customColors: {},
                customRoots: {},
            }
        };
        #DOM = {
            style: null,
            comment: null,
        };
        #PRIMARY = {};
        #ROOTS = {};
        #OUTPUT = {};
        #GROW_COUNT = 0;

        //-------------------------
        //       Validtion
        //-------------------------
        #VALIDATION = {
            // main
            string: (i) => typeof i == 'string',
            number: (i) => typeof i == 'number',
            boolean: (i) => typeof i == 'boolean',
            array: (i) => Array.isArray(i),
            object: (i) => typeof i === 'object' && !Array.isArray(i) && i !== null,
            empty: (i) => {
                if (i === null || i === undefined) return true;
                if (this.#VALIDATION.string(i)) return i.trim().length === 0;
                if (this.#VALIDATION.array(i)) return i.length === 0;
                if (this.#VALIDATION.object(i)) return Object.keys(i).length === 0;
                return false;
            },
            equalObjects: (obj1, obj2) => {
                if (obj1 === obj2) return true;
                const V = this.#VALIDATION;
                if (!V.object(obj1) || !V.object(obj2)) return false;
                const keys1 = Object.keys(obj1);
                const keys2 = Object.keys(obj2);
                if (keys1.length !== keys2.length) return false;
                for (const key of keys1) {
                    if (!keys2.includes(key)) return false;
                    if (!V.equalObjects(obj1[key], obj2[key])) return false;
                }

                return true;
            },
            equalArrays: (arr1, arr2) => {
                if (arr1 === arr2) return true;
                if (!Array.isArray(arr1) || !Array.isArray(arr2)) return false;
                if (arr1.length !== arr2.length) return false;

                const V = this.#VALIDATION;
                for (let i = 0; i < arr1.length; i++) {
                    if (!V.equalValues(arr1[i], arr2[i])) return false;
                }
                return true;
            },
            equalValues: (val1, val2) => {
                if (val1 === val2) return true;
                const V = this.#VALIDATION;
                if (V.array(val1) && V.array(val2)) {
                    return V.equalArrays(val1, val2);
                }
                if (V.object(val1) && V.object(val2)) {
                    return V.equalObjects(val1, val2);
                }
                return false;
            },

            // config
            id: (i) => this.#VALIDATION.string(i),
            comment: (i) => this.#VALIDATION.string(i),
            mainRoot: (i) => this.#VALIDATION.string(i),
            root: (i) => this.#VALIDATION.string(i),
            debug: (i) => this.#VALIDATION.boolean(i),
            color: (i) => this.#VALIDATION.string(i) && this.#COLOR_LAB.isColor(i),
            surfaceColor: (i) => this.#VALIDATION.string(i) && (this.#COLOR_LAB.isColor(i) || /^(primary|secondary|tertiary|quaternary)$/i.test(i)),
            theme: (i) => this.#VALIDATION.string(i) && /^(light|dark|auto)$/.test(i),
            contrast: (i) => (i === 'auto') || (this.#VALIDATION.number(i) && i >= 0 && i <= 100),
            sprout: (i) => this.#VALIDATION.boolean(i),
            prefix: (i) => this.#VALIDATION.string(i) && /^[a-z][a-z1-9]*$/i.test(i),
            suffix: (i) => this.#VALIDATION.string(i) && /^[a-z1-9]*$/i.test(i),
            harmony: (i) => this.#VALIDATION.string(i) && /^(analogous|complementary|tetradic|compound|split-complementary|monochromatic|triadic|square)$/.test(i),
            mainPalette: (i) => this.#VALIDATION.boolean(i),
            subPalette: (i) => this.#VALIDATION.boolean(i),
            colorLoopPalette: (i) => this.#VALIDATION.boolean(i),
            subColorLoopPalette: (i) => this.#VALIDATION.boolean(i),
            reverseSubPalettes: (i) => this.#VALIDATION.boolean(i),
            fixedSubPalettes: (i) => this.#VALIDATION.boolean(i),
            parts: (i) => this.#VALIDATION.array(i) && i.every(x => this.#VALIDATION.number(x) && x >= 0 && x <= 100),
            customColors: (i) => this.#VALIDATION.object(i) && (Object.values(i).every(x => this.#VALIDATION.color(x)) && Object.keys(i).every(x => /^[a-z][a-z0-9]*$/i.test(x))),
            customRoots: (i) => this.#VALIDATION.object(i),

            // other
            rootConfig: (i) => Object.hasOwn(this.#DEFAULT.ROOTS, i),
            primaryConfig: (i) => Object.hasOwn(this.#DEFAULT.PRIMARY, i),
            config: (i) => Object.hasOwn({ ...this.#DEFAULT.PRIMARY, ...this.#DEFAULT.ROOTS }, i),
            hasRoot: (i) => Object.hasOwn(this.#ROOTS, i),
        }

        //-------------------------
        //          Logs
        //-------------------------
        #LOGS = {
            // Errors
            E00: 'Invalid Mushroom argument "$$$"\n [Mushroom argument] must be a valid object.',
            E01: 'Invalid id "$$$"\n [id] Must be an string.',
            E02: 'Invalid comment "$$$"\n [comment] Must be an string.',
            E03: 'Invalid color "$$$"\n [color] Accepted formats: 148 standard colors, Hex, RGB, HSL, CMYK, or HSV.',
            E04: 'Invalid surfaceColor "$$$"\n [surfaceColor] Accepted formats: 148 standard colors, Hex, RGB, HSL, CMYK, or HSV.',
            E05: 'Invalid theme "$$$"\n [theme] Must be: "light", "dark", or "auto".',
            E06: 'Invalid mainRoot "$$$"\n [mainRoot] Must be a string value.',
            E07: 'Invalid root "$$$"\n [root] Must be a string value.',
            E08: 'Invalid harmony "$$$"\n [harmony] Must be one of: "analogous", "complementary", "triadic", "tetradic", "square", "compound", "split-complementary", "monochromatic".',
            E09: 'Invalid contrast "$$$"\n [contrast] Must be: number (0-100) or "auto".',
            E10: 'Invalid parts "$$$"\n [parts] Must be an array of numbers (0-100).',
            E11: 'Invalid prefix "$$$"\n [prefix] Must start with English letter and contain only English letters and numbers.',
            E12: 'Invalid suffix "$$$"\n [suffix] Must contain only English letters and numbers.',
            E13: 'Invalid customColor\n' +
                '• Object keys must:\n' +
                '  - Start with English letter\n' +
                '  - Contain only English letters and numbers\n' +
                '• Color values must use valid formats:\n' +
                '  - 148 standard colors\n' +
                '  - Hex, RGB, HSL, CMYK, or HSV',
            E14: 'Invalid sprout "$$$"\n [sprout] Must be boolean: true or false.',
            E15: 'Invalid debug "$$$"\n [debug] Must be boolean: true or false.',
            E16: 'Invalid mainPalette "$$$"\n [mainPalette] Must be boolean: true or false.',
            E17: 'Invalid subPalette "$$$"\n [subPalette] Must be boolean: true or false.',
            E18: 'Invalid reverseSubPalettes "$$$"\n [reverseSubPalettes] Must be boolean: true or false.',
            E19: 'Invalid fixedSubPalettes "$$$"\n [fixedSubPalettes] Must be boolean: true or false.',
            E20: 'Invalid colorLoopPalette "$$$"\n [colorLoopPalette] Must be boolean: true or false.',
            E21: 'Invalid subColorLoopPalette "$$$"\n [subColorLoopPalette] Must be boolean: true or false.',
            E22: 'Unauthorized custom color name "$$$"\n' +
                'Reserved system color names:\n' +
                'primary, secondary, tertiary, quaternary, error\n' +
                'Please choose a different name.',
            E23: 'Invalid Config "$$$"\n supported [Config]:\n' +
                '"id", "comment", "sprout", "debug",\n ' +
                '"mainRoot", "theme", "color", "harmony",\n ' +
                '"contrast", "prefix", "suffix", "parts",\n ' +
                '"mainPalette", "subPalette",\n ' +
                '"colorLoopPalette", "subColorLoopPalette",\n ' +
                '"reverseSubPalettes", "fixedSubPalettes",\n ' +
                '"surfaceColor", "customRoots", "customColors"',
            E24: 'Invalid Roots Config "$$$"\n supported [Roots Config]:\n' +
                '"root", "theme", "color", "harmony",\n ' +
                '"contrast", "prefix", "suffix", "parts",\n ' +
                '"mainPalette", "subPalette",\n ' +
                '"colorLoopPalette", "subColorLoopPalette",\n ' +
                '"reverseSubPalettes", "fixedSubPalettes",\n ' +
                '"surfaceColor", "customColors"',
            E25: 'Invalid Primary Config "$$$"\n supported [Primary Config]:\n' +
                '"id", "comment", "sprout", "debug", "mainRoot"',

            // Warnings 
            W00: 'Config "$$$" is locked after initialization\n' +
                'These settings can only be set when creating Mushroom:\n' +
                '"id", "comment", "sprout", "debug", "mainRoot"',
            W01: 'Root name "$$$" already exists\n' +
                'Please choose a different name.',

            // Infos
            I00: 'Mushroom.js v$$$.\n ' +
                '[source] https://github.com/MahdiDevRoom/Mushroom.js/\n ' +
                '[website] https://MahdiDevRoom.github.io/Mushroom.js/',

            // Successes
            S00: 'Mushroom sprouted! [$$$]'
        }

        //-------------------------
        //       Constructor
        //-------------------------
        constructor(config) {
            // Manifest
            this.version = '1.0.0';
            this.libs = { ColorLab: this.#COLOR_LAB.version };

            // setup
            this.#setup(config);
            this.#setupThemeChange();

            // Info
            this.#log('I00', this.version);

            // grow
            this.#grow();
        }

        //-------------------------
        //         Setup
        //-------------------------
        #setup(config = {}, base = { ...this.#DEFAULT.PRIMARY, ...this.#DEFAULT.ROOTS }) {
            let V = this.#VALIDATION;
            if (!V.object(config)) {
                this.#log('E00', config);
                return false;
            }

            // valid main
            let result = {};
            let currentRoots = {};

            result = this.#valid(config, base, result).config;

            // save cuurent root config
            for (const [key, val] of Object.entries(result)) {
                if (V.rootConfig(key)) currentRoots[key] = val;
            }

            // valid custom roots
            if (!V.empty(result.customRoots)) {
                for (const root in result.customRoots) {
                    if (root !== this.#DEFAULT.PRIMARY.mainRoot) {
                        let rootConfig = this.#valid(result.customRoots[root], currentRoots, {});
                        result.customRoots[root] = rootConfig.config;
                        if (rootConfig.emptyResult) delete result.customRoots[root];
                    } else {
                        result = this.#valid(result.customRoots[root], base, result).config;
                        delete result.customRoots[root];
                    }
                }
            }

            // distribute to #ROOTS & #PRIMARY
            this.#ROOTS[result.mainRoot] = {};
            for (const [key, val] of Object.entries(result)) {
                if (V.rootConfig(key)) this.#ROOTS[result.mainRoot][key] = val;
                if (V.primaryConfig(key)) this.#PRIMARY[key] = val;
            }
            for (const root in result.customRoots) {
                this.#ROOTS[root] = {};
                for (const [key, val] of Object.entries(result.customRoots[root])) {
                    this.#ROOTS[root][key] = val;
                }
            }
        }
        #valid(config, base, result) {
            let V = this.#VALIDATION;
            for (const [key, val] of Object.entries(config)) {
                if (V.config(key)) {
                    if (V[key](config[key])) result[key] = config[key];
                    else this.#log(this.#getErrorCode(key), val);
                } else {
                    this.#log('E23', key);
                }
            }
            return {
                emptyResult: V.empty(result),
                config: { ...base, ...result },
            };
        }
        #setupThemeChange() {
            this.#SYSTEM_THEME.addEventListener('change', () => {
                let shouldGrow = false;

                for (const root in this.#ROOTS) {
                    if (this.#ROOTS[root].theme === 'auto') {
                        shouldGrow = true;
                        break;
                    }
                }

                if (shouldGrow) this.#grow();
            });
        }

        //-------------------------
        //      Helper Method
        //-------------------------
        #getErrorCode(key) {
            const map = {
                id: 'E01', comment: 'E02', color: 'E03',
                surfaceColor: 'E04', theme: 'E05', mainRoot: 'E06',
                harmony: 'E07', contrast: 'E08', parts: 'E09',
                prefix: 'E10', suffix: 'E11', customColor: 'E12',
                sprout: 'E13', debug: 'E14', mainPalette: 'E15',
                subPalette: 'E16', reverseSubPalettes: 'E17',
                fixedSubPalettes: 'E18', colorLoopPalette: 'E19',
                subColorLoopPalette: 'E20',
            };
            return map[key] || 'E22';
        }
        #log(key, data) {
            const type = key[0];
            const code = key.slice(1);
            let message = this.#LOGS[key] || `Unknown log: ${key}`;

            if (data !== undefined) {
                message = message.replace('$$$', data);
            }

            let color, title;
            switch (type) {
                case 'E': {
                    color = '#a00';
                    title = 'Error';
                    break;
                }
                case 'W': {
                    color = '#a60';
                    title = 'Warning';
                    break;
                }
                case 'I': {
                    color = '#00a';
                    title = 'Info';
                    break;
                }
                case 'S': {
                    color = '#0a3';
                    title = 'Success';
                    break;
                }
            }

            if (this.#PRIMARY.debug) {
                console.log(
                    `%c 🍄 MUSHROOM ${title}! %c ${message}`,
                    `background: ${color}; font-weight: 900; color: #fff; font-family: monospace; padding: 2px 0px; border-radius: 16px`,
                    'padding: 2px'
                );
            }

            queueMicrotask(() => this.#dispatch('log', { key, message }));
            if (type == 'E') queueMicrotask(() => this.#dispatch('error', { key, message }));
            if (type == 'W') queueMicrotask(() => this.#dispatch('warn', { key, message }));
            if (type == 'I') queueMicrotask(() => this.#dispatch('info', { key, message }));
            if (type == 'S') queueMicrotask(() => this.#dispatch('success', { key, message }));
        }
        #dispatch(event, detail = {}) {
            this.#EVENT_TARGET.dispatchEvent(new CustomEvent(event, { detail }));
        }
        #LoopRatios(opt) {
            let option = {
                min: 0,
                max: 1,
                start: 0,
                count: 12,
            };

            let { min, max, start, count } = { ...option, ...opt };
            let points = Array(count).fill(0);
            let scale = (max - min) / 2;
            let offset = scale + min;

            for (let i in points) {
                points[i] = parseFloat((offset + scale * Math.cos(((i / count) * 2 * Math.PI))).toFixed(2))
            }

            let result = [];

            if (start == 0) return points;

            for (let i = 0; i < start; i++) result.unshift(points[i]);
            for (let i of points.slice(start).reverse()) result.push(i);

            return result;
        }
        #toCss(paletteObject, root = this.#PRIMARY.mainRoot) {
            let prefix = this.#ROOTS[root].prefix;
            let suffix = this.#ROOTS[root].suffix;

            prefix = prefix !== '' ? prefix + '-' : '';
            suffix = suffix !== '' ? '-' + suffix : '';

            let code = `${root} {\n`;
            for (let [key, value] of Object.entries(paletteObject))
                code += `   --${prefix}${key}${suffix}: ${value};\n`;
            code += '} \n';
            return code;
        }
        #sprout() {
            let head = document.head;

            if (this.#DOM.style) this.#DOM.style.remove();
            if (this.#DOM.comment) this.#DOM.comment.remove();

            this.#DOM.comment = document.createComment(` ${this.#PRIMARY.comment} `);
            head.appendChild(this.#DOM.comment);

            this.#DOM.style = document.createElement('style');
            this.#DOM.style.id = this.#PRIMARY.id;
            this.#DOM.style.textContent = this.#OUTPUT.code;
            head.appendChild(this.#DOM.style);
        }

        //-------------------------
        //        Generate
        //-------------------------
        #mainPalette(root) {
            let V = this.#VALIDATION;
            let CL = this.#COLOR_LAB;
            let AN = this.#ACCENT_NAMES;
            let { theme, harmony, contrast, color, surfaceColor, customColors } = this.#ROOTS[root];
            let darkmode = this.isDarkmode(root);
            let { H, S, L } = CL.toHslChannels(color);
            let harmonies = CL.getHarmonies(color)[harmony].map((value) => CL.getHue(value));
            let accent = AN.slice(0, harmonies.length);
            let result = {};
            let SH, SS, SL;

            if (V.color(surfaceColor)) {
                SH = CL.getHue(surfaceColor);
                SS = CL.getSaturation(surfaceColor);
                SL = CL.getLightness(surfaceColor);
            } else {
                SH = harmonies[AN.indexOf(surfaceColor)];
                SS = S;
                SL = L;
            }

            // Main Diff
            let MD = Math.round((contrast === 'auto') ? L / 10 : contrast / 10);
            // Surface Diff
            let SD = Math.round((contrast === 'auto') ? SL / 10 : contrast / 10);

            // Accent Color (MD)
            for (let i in accent) {
                result[accent[i]] = [harmonies[i], S, !darkmode ? 40 - MD : 70 + MD];
                result['on-' + accent[i]] = [harmonies[i], S, !darkmode ? 100 : 10];
                result[accent[i] + '-container'] = [harmonies[i], S, !darkmode ? 80 + MD : 20 - MD];
                result['on-' + accent[i] + '-container'] = [harmonies[i], S, !darkmode ? 20 - MD : 80 + MD];
            }

            // Error Color (MD)
            result['error'] = [0, S, !darkmode ? 40 - MD : 70 + MD];
            result['on-error'] = [0, S, !darkmode ? 100 : 10];
            result['error-container'] = [0, S, !darkmode ? 80 + MD : 20 - MD];
            result['on-error-container'] = [0, S, !darkmode ? 20 - MD : 80 + MD];

            // Surface Color (SD)
            result['background'] = [SH, SS / 3, !darkmode ? 95 - SD : 7 + SD];
            result['on-background'] = [SH, SS / 3, !darkmode ? 5 + SD : 90 - SD];
            result['surface'] = [SH, SS / 3, !darkmode ? 92 - SD : 10 + SD];
            result['on-surface'] = [SH, SS / 3, !darkmode ? 10 + SD : 90 - SD];
            result['surface-container-low'] = [SH, SS / 3, !darkmode ? 89 - SD : 12 + SD];
            result['on-surface-container-low'] = [SH, SS / 3, !darkmode ? 15 + SD : 95 - SD];
            result['surface-container'] = [SH, SS / 3, !darkmode ? 87 - SD : 15 + SD];
            result['on-surface-container'] = [SH, SS / 3, !darkmode ? 15 + SD : 95 - SD];
            result['surface-container-high'] = [SH, SS / 3, !darkmode ? 85 - SD : 18 + SD];
            result['on-surface-container-high'] = [SH, SS / 3, !darkmode ? 15 + SD : 95 - SD];
            result['surface-variant'] = [SH, SS / 2, !darkmode ? 85 - SD : 18 + SD];
            result['on-surface-variant'] = [SH, SS / 2, !darkmode ? 15 + SD : 95 - SD];

            // Outline (SD)
            result['outline'] = [SH, SS / 2, !darkmode ? 75 - SD : 28 + SD];
            result['outline-variant'] = [SH, SS / 3, !darkmode ? 80 - SD : 23 + SD];

            // custom colors (MD)
            for (const [name, color] of Object.entries(customColors)) {
                let limited = Object.keys(result).filter((i) => {
                    if (!['primary', 'secondary', 'tertiary', 'quaternary', 'error'].includes(i)) return i
                });

                if (limited.includes(name.toLocaleLowerCase())) {
                    this.#log('E22', name);
                    delete this.#ROOTS[root].customColors[name];
                    continue;
                }

                let { H: ccH, S: ccS } = CL.toHslChannels(color);

                result[name] = [ccH, ccS, !darkmode ? 40 - MD : 70 + MD];
                result['on-' + name] = [ccH, ccS, !darkmode ? 100 : 10];
                result[name + '-container'] = [ccH, ccS, !darkmode ? 80 + MD : 20 - MD];
                result['on-' + name + '-container'] = [ccH, ccS, !darkmode ? 20 - MD : 80 + MD];
            }


            // To Hex
            for (let i in result) result[i] = CL.channels.hsl.hex(...result[i]);

            return result;
        }
        #subPalette(root) {
            let V = this.#VALIDATION;
            let CL = this.#COLOR_LAB;
            let AN = this.#ACCENT_NAMES;
            let { color, surfaceColor, harmony, parts, fixedSubPalettes, reverseSubPalettes, customColors } = this.#ROOTS[root];
            let darkmode = this.isDarkmode(root);
            let { H, S } = CL.toHslChannels(color);
            let harmonies = CL.getHarmonies(color)[harmony].map((value) => CL.getHue(value));
            let accent = AN.slice(0, harmonies.length);
            let SH, SS;

            if (V.color(surfaceColor)) {
                SH = CL.getHue(surfaceColor);
                SS = CL.getSaturation(surfaceColor);
            } else {
                SH = harmonies[AN.indexOf(surfaceColor)];
                SS = S;
            }

            let result = {};

            let lightness = (i) => fixedSubPalettes ? (reverseSubPalettes ? 100 - i : i) : (darkmode ? (reverseSubPalettes ? i : 100 - i) : (reverseSubPalettes ? 100 - i : i));

            // Generate
            for (let a in accent)
                for (let i of parts) result[`${accent[a]}-${i}`] = [harmonies[a], S, lightness(i)];
            for (let i of parts) result[`error-${i}`] = [0, S, lightness(i)];
            for (let i of parts) result[`neutral-${i}`] = [SH, SS / 4, lightness(i)];
            for (let i of parts) result[`neutral-variant-${i}`] = [SH, SS / 2, lightness(i)];


            // custom colors
            for (const [name, color] of Object.entries(customColors)) {
                let limited = Object.keys(result).filter((i) => {
                    if (!['primary', 'secondary', 'tertiary', 'quaternary', 'error'].includes(i)) return i
                });

                if (limited.includes(name.toLocaleLowerCase())) {
                    this.#log('E22', name);

                    delete this.#ROOTS[root].customColors[name];
                    continue;
                }

                let { H: ccH, S: ccS } = CL.toHslChannels(color);

                for (let i of parts) result[`${name}-${i}`] = [ccH, ccS, lightness(i)];

            }

            // To Hex
            for (let i in result) result[i] = CL.channels.hsl.hex(...result[i])

            return result;
        }
        #colorLoopPalette(root) {
            let CL = this.#COLOR_LAB;
            let darkmode = this.isDarkmode(root);
            let { color } = this.#ROOTS[root];
            let { H, S, L } = CL.toHslChannels(color);
            let names = this.#COLOR_NAMES;
            let steps = 360 / names.length;
            let result = {};
            let ratios = this.#LoopRatios({
                min: S < 20 ? 25 : S / 4,
                max: S < 20 ? 100 : S,
                start: Math.round(H / steps),
                count: names.length,
            });

            for (let i in ratios) {
                result[names[i]] = [i * steps, ratios[i], !darkmode ? 40 : 70];
                result['on-' + names[i]] = [i * steps, ratios[i], !darkmode ? 100 : 10];
                result[names[i] + '-container'] = [i * steps, ratios[i], !darkmode ? 80 : 20];
                result['on-' + names[i] + '-container'] = [i * steps, ratios[i], !darkmode ? 20 : 80];
            }

            // To Hex
            for (let i in result) result[i] = CL.channels.hsl.hex(...result[i]);

            return result;
        }
        #subColorLoopPalette(root) {
            let CL = this.#COLOR_LAB;
            let darkmode = this.isDarkmode(root);
            let { parts, color, fixedSubPalettes, reverseSubPalettes } = this.#ROOTS[root];
            let { H, S, L } = CL.toHslChannels(color);
            let names = this.#COLOR_NAMES;
            let steps = 360 / names.length;
            let result = {};

            let lightness = (i) => fixedSubPalettes ? (reverseSubPalettes ? 100 - i : i) : (darkmode ? (reverseSubPalettes ? i : 100 - i) : (reverseSubPalettes ? 100 - i : i));

            let ratios = this.#LoopRatios({
                min: S < 20 ? 25 : S / 4,
                max: S < 20 ? 100 : S,
                start: Math.round(H / steps),
                count: names.length,
            });


            for (let i in ratios) {
                for (let j of parts) result[`${names[i]}-${j}`] = [i * steps, ratios[i], lightness(j)];
            }

            // To Hex
            for (let i in result) result[i] = CL.channels.hsl.hex(...result[i]);

            return result;
        }


        //-------------------------
        //         Grow
        //-------------------------
        #grow() {
            let O = this.#OUTPUT;
            let R = this.#ROOTS;

            O.palettes = {};
            for (const root in R) {
                O.palettes[root] = {};
                O.palettes[root]['mainPalette'] = R[root].mainPalette ? this.#mainPalette(root) : {};
                O.palettes[root]['subPalette'] = R[root].subPalette ? this.#subPalette(root) : {};
                O.palettes[root]['colorLoopPalette'] = R[root].colorLoopPalette ? this.#colorLoopPalette(root) : {};
                O.palettes[root]['subColorLoopPalette'] = R[root].subColorLoopPalette ? this.#subColorLoopPalette(root) : {};

                O.palettes[root]['palette'] = Object.assign({},
                    O.palettes[root].mainPalette,
                    O.palettes[root].subPalette,
                    O.palettes[root].colorLoopPalette,
                    O.palettes[root].subColorLoopPalette,
                );
            }

            // Generate Css Code
            O.code = '';
            for (let root in O.palettes) O.code += this.#toCss(O.palettes[root].palette, root);

            // Sprout
            this.#sprout();

            // Detail
            this.#GROW_COUNT++;
            O['growCount'] = this.#GROW_COUNT;

            // Log
            this.#log('S00', this.#GROW_COUNT);

            // Event
            queueMicrotask(() => this.#dispatch('grow', O));
        }

        //-------------------------
        //         Events 
        //-------------------------
        set ongrow(callback) {
            this.#EVENT_TARGET.addEventListener('grow', (e) => callback(e.detail));
        }
        set onlog(callback) {
            this.#EVENT_TARGET.addEventListener('log', (e) => callback(e.detail));
        }
        set onerror(callback) {
            this.#EVENT_TARGET.addEventListener('error', (e) => callback(e.detail));
        }
        set onwarn(callback) {
            this.#EVENT_TARGET.addEventListener('warn', (e) => callback(e.detail));
        }
        set oninfo(callback) {
            this.#EVENT_TARGET.addEventListener('info', (e) => callback(e.detail));
        }
        set onsuccess(callback) {
            this.#EVENT_TARGET.addEventListener('success', (e) => callback(e.detail));
        }

        //-------------------------
        //          API 
        //-------------------------
        setConfig(key, val, root = this.#PRIMARY.mainRoot) {
            let V = this.#VALIDATION;

            if (!V.rootConfig(key)) {
                this.#log('E24', key);
                return this;
            }

            if (!V[key](val)) {
                this.#log(this.#getErrorCode(key), val);
                return this;
            }

            if (!V.root(root)) {
                this.#log('E07', root);
                return this;
            }

            if (!V.hasRoot(root)) {
                this.#ROOTS[root] = { ...this.#ROOTS[this.#PRIMARY.mainRoot] };
            }

            if (V.equalValues(this.#ROOTS[root][key], val)) {
                return this;
            }

            this.#ROOTS[root][key] = val;
            this.#grow();

            return this;
        }
        getSystemTheme() {
            return this.#SYSTEM_THEME.matches ? 'dark' : 'light';
        }
        getCurrentTheme(root = this.#PRIMARY.mainRoot) {
            if (this.#ROOTS[root]?.theme == 'auto') {
                return this.getSystemTheme();
            } else {
                return this.#ROOTS[root]?.theme;
            }
        }
        isDarkmode(root = this.#PRIMARY.mainRoot) {
            if (this.#ROOTS[root]?.theme == 'auto') {
                return this.#SYSTEM_THEME.matches;
            } else {
                return this.#ROOTS[root]?.theme == 'dark';
            }
        }

        getPalette(root = this.#PRIMARY.mainRoot) {
            return this.#OUTPUT.palettes?.[root]?.palette || {};
        }
        getMainPalette(root = this.#PRIMARY.mainRoot) {
            return this.#OUTPUT.palettes?.[root]?.mainPalette || {};
        }
        getSubPalette(root = this.#PRIMARY.mainRoot) {
            return this.#OUTPUT.palettes?.[root]?.subPalette || {};
        }
        getColorLoopPalette(root = this.#PRIMARY.mainRoot) {
            return this.#OUTPUT.palettes?.[root]?.colorLoopPalette || {};
        }
        getSubColorLoopPalette(root = this.#PRIMARY.mainRoot) {
            return this.#OUTPUT.palettes?.[root]?.subColorLoopPalette || {};
        }

        get id() {
            return this.#PRIMARY.id;
        }
        get comment() {
            return this.#PRIMARY.comment;
        }
        get sprout() {
            return this.#PRIMARY.sprout;
        }
        get debug() {
            return this.#PRIMARY.debug;
        }
        get mainRoot() {
            return this.#PRIMARY.mainRoot;
        }
        get customRoots() {
            return this.#PRIMARY.customRoots;
        }

        get growCount() {
            return this.#GROW_COUNT;
        }
        get rootNames() {
            return Object.keys(this.#ROOTS);
        }
        get code() {
            return this.#OUTPUT.code || '';
        }
        get palettes() {
            return this.#OUTPUT.palettes || {};
        }


        //-------------------------
        //        Methods 
        //-------------------------
        setColor(val, root) {
            return this.setConfig('color', val, root);
        }
        setSurfaceColor(val, root) {
            return this.setConfig('surfaceColor', val, root);
        }
        setTheme(val, root) {
            return this.setConfig('theme', val, root);
        }
        setHarmony(val, root) {
            return this.setConfig('harmony', val, root);
        }
        setContrast(val, root) {
            return this.setConfig('contrast', val, root);
        }
        setPrefix(val, root) {
            return this.setConfig('prefix', val, root);
        }
        setSuffix(val, root) {
            return this.setConfig('suffix', val, root);
        }
        setParts(val, root) {
            return this.setConfig('parts', val, root);
        }
        setMainPalette(val, root) {
            return this.setConfig('mainPalette', val, root);
        }
        setSubPalette(val, root) {
            return this.setConfig('subPalette', val, root);
        }
        setColorLoopPalette(val, root) {
            return this.setConfig('colorLoopPalette', val, root);
        }
        setSubColorLoopPalette(val, root) {
            return this.setConfig('subColorLoopPalette', val, root);
        }
        setReverseSubPalettes(val, root) {
            return this.setConfig('reverseSubPalettes', val, root);
        }
        setFixedSubPalettes(val, root) {
            return this.setConfig('fixedSubPalettes', val, root);
        }
        setCustomColors(val, root) {
            return this.setConfig('customColors', val, root);
        }
        //-------------------------
        //        Propetry 
        //-------------------------
        set color(val) {
            this.setColor(val);
        }
        set surfaceColor(val) {
            this.setSurfaceColor(val);
        }
        set theme(val) {
            this.setTheme(val);
        }
        set harmony(val) {
            this.setHarmony(val);
        }
        set contrast(val) {
            this.setContrast(val);
        }
        set prefix(val) {
            this.setPrefix(val);
        }
        set suffix(val) {
            this.setSuffix(val);
        }
        set parts(val) {
            this.setParts(val);
        }
        set mainPalette(val) {
            this.setMainPalette(val);
        }
        set subPalette(val) {
            this.setSubPalette(val);
        }
        set colorLoopPalette(val) {
            this.setColorLoopPalette(val);
        }
        set subColorLoopPalette(val) {
            this.setSubColorLoopPalette(val);
        }
        set reverseSubPalettes(val) {
            this.setReverseSubPalettes(val);
        }
        set fixedSubPalettes(val) {
            this.setFixedSubPalettes(val);
        }
        set customColors(val) {
            this.setCustomColors(val);
        }
        get color() {
            return this.#ROOTS[this.#PRIMARY.mainRoot]?.color;
        }
        get surfaceColor() {
            return this.#ROOTS[this.#PRIMARY.mainRoot]?.surfaceColor;
        }
        get theme() {
            return this.#ROOTS[this.#PRIMARY.mainRoot]?.theme;
        }
        get harmony() {
            return this.#ROOTS[this.#PRIMARY.mainRoot]?.harmony;
        }
        get contrast() {
            return this.#ROOTS[this.#PRIMARY.mainRoot]?.contrast;
        }
        get prefix() {
            return this.#ROOTS[this.#PRIMARY.mainRoot]?.prefix;
        }
        get suffix() {
            return this.#ROOTS[this.#PRIMARY.mainRoot]?.suffix;
        }
        get parts() {
            return this.#ROOTS[this.#PRIMARY.mainRoot]?.parts;
        }
        get mainPalette() {
            return this.#ROOTS[this.#PRIMARY.mainRoot]?.mainPalette;
        }
        get subPalette() {
            return this.#ROOTS[this.#PRIMARY.mainRoot]?.subPalette;
        }
        get colorLoopPalette() {
            return this.#ROOTS[this.#PRIMARY.mainRoot]?.colorLoopPalette;
        }
        get subColorLoopPalette() {
            return this.#ROOTS[this.#PRIMARY.mainRoot]?.subColorLoopPalette;
        }
        get reverseSubPalettes() {
            return this.#ROOTS[this.#PRIMARY.mainRoot]?.reverseSubPalettes;
        }
        get fixedSubPalettes() {
            return this.#ROOTS[this.#PRIMARY.mainRoot]?.fixedSubPalettes;
        }
        get customColors() {
            return this.#ROOTS[this.#PRIMARY.mainRoot]?.customColors;
        }
    }

    // Global
    G.Mushroom = Mushroom;

})(globalThis);