
const ELEMENTS = [{"number": 1, "symbol": "H", "name": "Hydrogen", "group": 1, "period": 1, "category": "Nonmetal", "state": "Gas", "mass": "1.008", "electronConfig": "1s¹", "discoveryBy": "Henry Cavendish", "discoveryYear": "1766", "uses": ["ammonia production", "fuel cells"], "compounds": ["H₂O", "HCl", "NH₃"], "oxidation": "+1, -1", "reactivity": "moderate to high", "x": 1, "y": 1, "block": "s", "shells": [1], "shellText": "1", "trendRadius": 1.135, "trendEN": 0.84}, {"number": 2, "symbol": "He", "name": "Helium", "group": 18, "period": 1, "category": "Noble Gas", "state": "Gas", "mass": "4.0026", "electronConfig": "1s²", "discoveryBy": "Pierre Janssen and Norman Lockyer", "discoveryYear": "1868", "uses": ["cryogenic cooling", "balloons"], "compounds": ["very rare helium compounds"], "oxidation": "0", "reactivity": "very low", "x": 18, "y": 1, "block": "s", "shells": [2], "shellText": "2", "trendRadius": 0.71, "trendEN": 2.38}, {"number": 3, "symbol": "Li", "name": "Lithium", "group": 1, "period": 2, "category": "Alkali Metal", "state": "Solid", "mass": "6.94", "electronConfig": "[He] 2s¹", "discoveryBy": "Johan August Arfwedson", "discoveryYear": "1817", "uses": ["rechargeable batteries", "light alloys"], "compounds": ["Li₂CO₃", "LiOH"], "oxidation": "+1", "reactivity": "very high", "x": 1, "y": 2, "block": "s", "shells": [2, 1], "shellText": "2, 1", "trendRadius": 1.295, "trendEN": 0.76}, {"number": 4, "symbol": "Be", "name": "Beryllium", "group": 2, "period": 2, "category": "Alkaline Earth Metal", "state": "Solid", "mass": "9.0122", "electronConfig": "[He] 2s²", "discoveryBy": "Louis-Nicolas Vauquelin", "discoveryYear": "1798", "uses": ["X-ray windows", "aerospace alloys"], "compounds": ["BeO", "BeCl₂"], "oxidation": "+2", "reactivity": "high", "x": 2, "y": 2, "block": "s", "shells": [2, 2], "shellText": "2, 2", "trendRadius": 1.27, "trendEN": 0.88}, {"number": 5, "symbol": "B", "name": "Boron", "group": 13, "period": 2, "category": "Metalloid", "state": "Solid", "mass": "10.81", "electronConfig": "[He] 2s² 2p¹", "discoveryBy": "Gay-Lussac and Thénard", "discoveryYear": "1808", "uses": ["borosilicate glass", "detergents"], "compounds": ["B₂O₃", "Na₂B₄O₇"], "oxidation": "+3", "reactivity": "moderate", "x": 13, "y": 2, "block": "p", "shells": [2, 3], "shellText": "2, 3", "trendRadius": 0.995, "trendEN": 2.2}, {"number": 6, "symbol": "C", "name": "Carbon", "group": 14, "period": 2, "category": "Nonmetal", "state": "Solid", "mass": "12.011", "electronConfig": "[He] 2s² 2p²", "discoveryBy": "Known since antiquity", "discoveryYear": "Ancient", "uses": ["steelmaking", "electrodes"], "compounds": ["CO₂", "CH₄", "CaCO₃"], "oxidation": "-4, +2, +4", "reactivity": "moderate to high", "x": 14, "y": 2, "block": "p", "shells": [2, 4], "shellText": "2, 4", "trendRadius": 0.97, "trendEN": 2.32}, {"number": 7, "symbol": "N", "name": "Nitrogen", "group": 15, "period": 2, "category": "Nonmetal", "state": "Gas", "mass": "14.007", "electronConfig": "[He] 2s² 2p³", "discoveryBy": "Daniel Rutherford", "discoveryYear": "1772", "uses": ["fertilizers", "inert atmosphere"], "compounds": ["NH₃", "NO₂", "HNO₃"], "oxidation": "-3 to +5", "reactivity": "moderate to high", "x": 15, "y": 2, "block": "p", "shells": [2, 5], "shellText": "2, 5", "trendRadius": 0.945, "trendEN": 2.44}, {"number": 8, "symbol": "O", "name": "Oxygen", "group": 16, "period": 2, "category": "Nonmetal", "state": "Gas", "mass": "15.999", "electronConfig": "[He] 2s² 2p⁴", "discoveryBy": "Scheele and Priestley", "discoveryYear": "1770s", "uses": ["medical oxygen", "steelmaking"], "compounds": ["H₂O", "CO₂", "Fe₂O₃"], "oxidation": "-2", "reactivity": "moderate to high", "x": 16, "y": 2, "block": "p", "shells": [2, 6], "shellText": "2, 6", "trendRadius": 0.92, "trendEN": 2.56}, {"number": 9, "symbol": "F", "name": "Fluorine", "group": 17, "period": 2, "category": "Halogen", "state": "Gas", "mass": "18.998", "electronConfig": "[He] 2s² 2p⁵", "discoveryBy": "Henri Moissan", "discoveryYear": "1886", "uses": ["fluorides", "UF₆ production"], "compounds": ["NaF", "HF"], "oxidation": "-1", "reactivity": "very high", "x": 17, "y": 2, "block": "p", "shells": [2, 7], "shellText": "2, 7", "trendRadius": 0.895, "trendEN": 3.08}, {"number": 10, "symbol": "Ne", "name": "Neon", "group": 18, "period": 2, "category": "Noble Gas", "state": "Gas", "mass": "20.180", "electronConfig": "[He] 2s² 2p⁶", "discoveryBy": "Ramsay and Travers", "discoveryYear": "1898", "uses": ["sign lighting", "lasers"], "compounds": ["very rare neon compounds"], "oxidation": "0", "reactivity": "very low", "x": 18, "y": 2, "block": "p", "shells": [2, 8], "shellText": "2, 8", "trendRadius": 0.87, "trendEN": 2.3}, {"number": 11, "symbol": "Na", "name": "Sodium", "group": 1, "period": 3, "category": "Alkali Metal", "state": "Solid", "mass": "22.990", "electronConfig": "[Ne] 3s¹", "discoveryBy": "Humphry Davy", "discoveryYear": "1807", "uses": ["sodium lamps", "chemical reduction"], "compounds": ["NaCl", "NaOH", "Na₂CO₃"], "oxidation": "+1", "reactivity": "very high", "x": 1, "y": 3, "block": "s", "shells": [2, 8, 1], "shellText": "2, 8, 1", "trendRadius": 1.455, "trendEN": 0.68}, {"number": 12, "symbol": "Mg", "name": "Magnesium", "group": 2, "period": 3, "category": "Alkaline Earth Metal", "state": "Solid", "mass": "24.305", "electronConfig": "[Ne] 3s²", "discoveryBy": "Joseph Black", "discoveryYear": "1755", "uses": ["alloys", "fireworks"], "compounds": ["MgO", "MgSO₄"], "oxidation": "+2", "reactivity": "high", "x": 2, "y": 3, "block": "s", "shells": [2, 8, 2], "shellText": "2, 8, 2", "trendRadius": 1.43, "trendEN": 0.8}, {"number": 13, "symbol": "Al", "name": "Aluminium", "group": 13, "period": 3, "category": "Post-transition Metal", "state": "Solid", "mass": "26.982", "electronConfig": "[Ne] 3s² 3p¹", "discoveryBy": "Hans Christian Ørsted", "discoveryYear": "1825", "uses": ["transport", "packaging"], "compounds": ["Al₂O₃", "AlCl₃"], "oxidation": "+3", "reactivity": "moderate", "x": 13, "y": 3, "block": "p", "shells": [2, 8, 3], "shellText": "2, 8, 3", "trendRadius": 1.155, "trendEN": 2.12}, {"number": 14, "symbol": "Si", "name": "Silicon", "group": 14, "period": 3, "category": "Metalloid", "state": "Solid", "mass": "28.085", "electronConfig": "[Ne] 3s² 3p²", "discoveryBy": "Jöns Jacob Berzelius", "discoveryYear": "1824", "uses": ["microchips", "solar cells"], "compounds": ["SiO₂", "SiC"], "oxidation": "-4, +4", "reactivity": "moderate", "x": 14, "y": 3, "block": "p", "shells": [2, 8, 4], "shellText": "2, 8, 4", "trendRadius": 1.13, "trendEN": 2.24}, {"number": 15, "symbol": "P", "name": "Phosphorus", "group": 15, "period": 3, "category": "Nonmetal", "state": "Solid", "mass": "30.974", "electronConfig": "[Ne] 3s² 3p³", "discoveryBy": "Hennig Brand", "discoveryYear": "1669", "uses": ["fertilizers", "matches"], "compounds": ["H₃PO₄", "P₄O₁₀"], "oxidation": "-3, +3, +5", "reactivity": "moderate to high", "x": 15, "y": 3, "block": "p", "shells": [2, 8, 5], "shellText": "2, 8, 5", "trendRadius": 1.105, "trendEN": 2.36}, {"number": 16, "symbol": "S", "name": "Sulfur", "group": 16, "period": 3, "category": "Nonmetal", "state": "Solid", "mass": "32.06", "electronConfig": "[Ne] 3s² 3p⁴", "discoveryBy": "Known since antiquity", "discoveryYear": "Ancient", "uses": ["sulfuric acid", "rubber vulcanization"], "compounds": ["SO₂", "H₂SO₄"], "oxidation": "-2, +4, +6", "reactivity": "moderate to high", "x": 16, "y": 3, "block": "p", "shells": [2, 8, 6], "shellText": "2, 8, 6", "trendRadius": 1.08, "trendEN": 2.48}, {"number": 17, "symbol": "Cl", "name": "Chlorine", "group": 17, "period": 3, "category": "Halogen", "state": "Gas", "mass": "35.45", "electronConfig": "[Ne] 3s² 3p⁵", "discoveryBy": "Carl Wilhelm Scheele", "discoveryYear": "1774", "uses": ["water purification", "PVC manufacture"], "compounds": ["NaCl", "HCl", "Ca(OCl)₂"], "oxidation": "-1, +1, +3, +5, +7", "reactivity": "very high", "x": 17, "y": 3, "block": "p", "shells": [2, 8, 7], "shellText": "2, 8, 7", "trendRadius": 1.055, "trendEN": 3.0}, {"number": 18, "symbol": "Ar", "name": "Argon", "group": 18, "period": 3, "category": "Noble Gas", "state": "Gas", "mass": "39.948", "electronConfig": "[Ne] 3s² 3p⁶", "discoveryBy": "Lord Rayleigh and William Ramsay", "discoveryYear": "1894", "uses": ["welding gas", "light bulbs"], "compounds": ["rare argon compounds"], "oxidation": "0", "reactivity": "very low", "x": 18, "y": 3, "block": "p", "shells": [2, 8, 8], "shellText": "2, 8, 8", "trendRadius": 1.03, "trendEN": 2.22}, {"number": 19, "symbol": "K", "name": "Potassium", "group": 1, "period": 4, "category": "Alkali Metal", "state": "Solid", "mass": "39.098", "electronConfig": "[Ar] 4s¹", "discoveryBy": "Humphry Davy", "discoveryYear": "1807", "uses": ["fertilizers", "reagents"], "compounds": ["KCl", "KOH"], "oxidation": "+1", "reactivity": "very high", "x": 1, "y": 4, "block": "s", "shells": [2, 8, 9], "shellText": "2, 8, 9", "trendRadius": 1.615, "trendEN": 0.6}, {"number": 20, "symbol": "Ca", "name": "Calcium", "group": 2, "period": 4, "category": "Alkaline Earth Metal", "state": "Solid", "mass": "40.078", "electronConfig": "[Ar] 4s²", "discoveryBy": "Humphry Davy", "discoveryYear": "1808", "uses": ["cement", "metallurgy"], "compounds": ["CaCO₃", "CaO", "CaCl₂"], "oxidation": "+2", "reactivity": "high", "x": 2, "y": 4, "block": "s", "shells": [2, 8, 10], "shellText": "2, 8, 10", "trendRadius": 1.59, "trendEN": 0.72}, {"number": 21, "symbol": "Sc", "name": "Scandium", "group": 3, "period": 4, "category": "Transition Metal", "state": "Solid", "mass": "44.956", "electronConfig": "[Ar] 3d¹ 4s²", "discoveryBy": "Lars Fredrik Nilson", "discoveryYear": "1879", "uses": ["aerospace alloys", "metal halide lamps"], "compounds": ["Sc₂O₃"], "oxidation": "+3", "reactivity": "variable", "x": 3, "y": 4, "block": "d", "shells": [2, 8, 11], "shellText": "2, 8, 11", "trendRadius": 1.565, "trendEN": 0.84}, {"number": 22, "symbol": "Ti", "name": "Titanium", "group": 4, "period": 4, "category": "Transition Metal", "state": "Solid", "mass": "47.867", "electronConfig": "[Ar] 3d² 4s²", "discoveryBy": "William Gregor", "discoveryYear": "1791", "uses": ["aircraft", "implants"], "compounds": ["TiO₂", "TiCl₄"], "oxidation": "+2, +3, +4", "reactivity": "variable", "x": 4, "y": 4, "block": "d", "shells": [2, 8, 12], "shellText": "2, 8, 12", "trendRadius": 1.54, "trendEN": 0.96}, {"number": 23, "symbol": "V", "name": "Vanadium", "group": 5, "period": 4, "category": "Transition Metal", "state": "Solid", "mass": "50.942", "electronConfig": "[Ar] 3d³ 4s²", "discoveryBy": "Andrés Manuel del Río", "discoveryYear": "1801", "uses": ["steel strengthening", "catalysts"], "compounds": ["V₂O₅"], "oxidation": "+2, +3, +4, +5", "reactivity": "variable", "x": 5, "y": 4, "block": "d", "shells": [2, 8, 13], "shellText": "2, 8, 13", "trendRadius": 1.515, "trendEN": 1.08}, {"number": 24, "symbol": "Cr", "name": "Chromium", "group": 6, "period": 4, "category": "Transition Metal", "state": "Solid", "mass": "51.996", "electronConfig": "[Ar] 3d⁵ 4s¹", "discoveryBy": "Louis Nicolas Vauquelin", "discoveryYear": "1797", "uses": ["chrome plating", "stainless steel"], "compounds": ["Cr₂O₃", "K₂Cr₂O₇"], "oxidation": "+2, +3, +6", "reactivity": "variable", "x": 6, "y": 4, "block": "d", "shells": [2, 8, 14], "shellText": "2, 8, 14", "trendRadius": 1.49, "trendEN": 1.2}, {"number": 25, "symbol": "Mn", "name": "Manganese", "group": 7, "period": 4, "category": "Transition Metal", "state": "Solid", "mass": "54.938", "electronConfig": "[Ar] 3d⁵ 4s²", "discoveryBy": "Johan Gottlieb Gahn", "discoveryYear": "1774", "uses": ["steelmaking", "batteries"], "compounds": ["MnO₂", "KMnO₄"], "oxidation": "+2, +4, +7", "reactivity": "variable", "x": 7, "y": 4, "block": "d", "shells": [2, 8, 15], "shellText": "2, 8, 15", "trendRadius": 1.465, "trendEN": 1.32}, {"number": 26, "symbol": "Fe", "name": "Iron", "group": 8, "period": 4, "category": "Transition Metal", "state": "Solid", "mass": "55.845", "electronConfig": "[Ar] 3d⁶ 4s²", "discoveryBy": "Known since antiquity", "discoveryYear": "Ancient", "uses": ["steel", "construction"], "compounds": ["Fe₂O₃", "FeSO₄"], "oxidation": "+2, +3", "reactivity": "variable", "x": 8, "y": 4, "block": "d", "shells": [2, 8, 16], "shellText": "2, 8, 16", "trendRadius": 1.44, "trendEN": 1.44}, {"number": 27, "symbol": "Co", "name": "Cobalt", "group": 9, "period": 4, "category": "Transition Metal", "state": "Solid", "mass": "58.933", "electronConfig": "[Ar] 3d⁷ 4s²", "discoveryBy": "Georg Brandt", "discoveryYear": "1735", "uses": ["batteries", "blue pigments"], "compounds": ["CoO", "CoCl₂"], "oxidation": "+2, +3", "reactivity": "variable", "x": 9, "y": 4, "block": "d", "shells": [2, 8, 17], "shellText": "2, 8, 17", "trendRadius": 1.415, "trendEN": 1.56}, {"number": 28, "symbol": "Ni", "name": "Nickel", "group": 10, "period": 4, "category": "Transition Metal", "state": "Solid", "mass": "58.693", "electronConfig": "[Ar] 3d⁸ 4s²", "discoveryBy": "Axel Fredrik Cronstedt", "discoveryYear": "1751", "uses": ["stainless steel", "electroplating"], "compounds": ["NiO", "NiSO₄"], "oxidation": "+2, +3", "reactivity": "variable", "x": 10, "y": 4, "block": "d", "shells": [2, 8, 18], "shellText": "2, 8, 18", "trendRadius": 1.39, "trendEN": 1.68}, {"number": 29, "symbol": "Cu", "name": "Copper", "group": 11, "period": 4, "category": "Transition Metal", "state": "Solid", "mass": "63.546", "electronConfig": "[Ar] 3d¹⁰ 4s¹", "discoveryBy": "Known since antiquity", "discoveryYear": "Ancient", "uses": ["electrical wiring", "alloys"], "compounds": ["CuSO₄", "CuO"], "oxidation": "+1, +2", "reactivity": "variable", "x": 11, "y": 4, "block": "d", "shells": [2, 8, 18, 1], "shellText": "2, 8, 18, 1", "trendRadius": 1.365, "trendEN": 1.8}, {"number": 30, "symbol": "Zn", "name": "Zinc", "group": 12, "period": 4, "category": "Transition Metal", "state": "Solid", "mass": "65.38", "electronConfig": "[Ar] 3d¹⁰ 4s²", "discoveryBy": "Andreas Marggraf", "discoveryYear": "1746", "uses": ["galvanizing", "brass"], "compounds": ["ZnO", "ZnSO₄"], "oxidation": "+2", "reactivity": "variable", "x": 12, "y": 4, "block": "d", "shells": [2, 8, 18, 2], "shellText": "2, 8, 18, 2", "trendRadius": 1.34, "trendEN": 1.92}, {"number": 31, "symbol": "Ga", "name": "Gallium", "group": 13, "period": 4, "category": "Post-transition Metal", "state": "Solid", "mass": "69.723", "electronConfig": "[Ar] 3d¹⁰ 4s² 4p¹", "discoveryBy": "Lecoq de Boisbaudran", "discoveryYear": "1875", "uses": ["semiconductors", "LEDs"], "compounds": ["GaAs", "Ga₂O₃"], "oxidation": "+3", "reactivity": "moderate", "x": 13, "y": 4, "block": "p", "shells": [2, 8, 18, 3], "shellText": "2, 8, 18, 3", "trendRadius": 1.315, "trendEN": 2.04}, {"number": 32, "symbol": "Ge", "name": "Germanium", "group": 14, "period": 4, "category": "Metalloid", "state": "Solid", "mass": "72.630", "electronConfig": "[Ar] 3d¹⁰ 4s² 4p²", "discoveryBy": "Clemens Winkler", "discoveryYear": "1886", "uses": ["fiber optics", "semiconductors"], "compounds": ["GeO₂"], "oxidation": "+2, +4", "reactivity": "moderate", "x": 14, "y": 4, "block": "p", "shells": [2, 8, 18, 4], "shellText": "2, 8, 18, 4", "trendRadius": 1.29, "trendEN": 2.16}, {"number": 33, "symbol": "As", "name": "Arsenic", "group": 15, "period": 4, "category": "Metalloid", "state": "Solid", "mass": "74.922", "electronConfig": "[Ar] 3d¹⁰ 4s² 4p³", "discoveryBy": "Albertus Magnus credited", "discoveryYear": "1250", "uses": ["alloys", "semiconductor doping"], "compounds": ["As₂O₃"], "oxidation": "-3, +3, +5", "reactivity": "moderate", "x": 15, "y": 4, "block": "p", "shells": [2, 8, 18, 5], "shellText": "2, 8, 18, 5", "trendRadius": 1.265, "trendEN": 2.28}, {"number": 34, "symbol": "Se", "name": "Selenium", "group": 16, "period": 4, "category": "Nonmetal", "state": "Solid", "mass": "78.971", "electronConfig": "[Ar] 3d¹⁰ 4s² 4p⁴", "discoveryBy": "Jöns Jacob Berzelius", "discoveryYear": "1817", "uses": ["glass coloring", "electronics"], "compounds": ["SeO₂"], "oxidation": "-2, +4, +6", "reactivity": "moderate to high", "x": 16, "y": 4, "block": "p", "shells": [2, 8, 18, 6], "shellText": "2, 8, 18, 6", "trendRadius": 1.24, "trendEN": 2.4}, {"number": 35, "symbol": "Br", "name": "Bromine", "group": 17, "period": 4, "category": "Halogen", "state": "Liquid", "mass": "79.904", "electronConfig": "[Ar] 3d¹⁰ 4s² 4p⁵", "discoveryBy": "Antoine Jérôme Balard", "discoveryYear": "1826", "uses": ["flame retardants", "photography"], "compounds": ["HBr", "KBr"], "oxidation": "-1, +1, +5", "reactivity": "very high", "x": 17, "y": 4, "block": "p", "shells": [2, 8, 18, 7], "shellText": "2, 8, 18, 7", "trendRadius": 1.215, "trendEN": 2.92}, {"number": 36, "symbol": "Kr", "name": "Krypton", "group": 18, "period": 4, "category": "Noble Gas", "state": "Gas", "mass": "83.798", "electronConfig": "[Ar] 3d¹⁰ 4s² 4p⁶", "discoveryBy": "Ramsay and Travers", "discoveryYear": "1898", "uses": ["lighting", "lasers"], "compounds": ["KrF₂"], "oxidation": "0, +2", "reactivity": "very low", "x": 18, "y": 4, "block": "p", "shells": [2, 8, 18, 8], "shellText": "2, 8, 18, 8", "trendRadius": 1.19, "trendEN": 2.14}, {"number": 37, "symbol": "Rb", "name": "Rubidium", "group": 1, "period": 5, "category": "Alkali Metal", "state": "Solid", "mass": "85.468", "electronConfig": "[Kr] 5s¹", "discoveryBy": "Bunsen and Kirchhoff", "discoveryYear": "1861", "uses": ["research", "atomic clocks"], "compounds": ["RbCl"], "oxidation": "+1", "reactivity": "very high", "x": 1, "y": 5, "block": "s", "shells": [2, 8, 18, 9], "shellText": "2, 8, 18, 9", "trendRadius": 1.775, "trendEN": 0.52}, {"number": 38, "symbol": "Sr", "name": "Strontium", "group": 2, "period": 5, "category": "Alkaline Earth Metal", "state": "Solid", "mass": "87.62", "electronConfig": "[Kr] 5s²", "discoveryBy": "Adair Crawford", "discoveryYear": "1790", "uses": ["fireworks", "ceramics"], "compounds": ["SrCO₃", "SrCl₂"], "oxidation": "+2", "reactivity": "high", "x": 2, "y": 5, "block": "s", "shells": [2, 8, 18, 10], "shellText": "2, 8, 18, 10", "trendRadius": 1.75, "trendEN": 0.64}, {"number": 39, "symbol": "Y", "name": "Yttrium", "group": 3, "period": 5, "category": "Transition Metal", "state": "Solid", "mass": "88.906", "electronConfig": "[Kr] 4d¹ 5s²", "discoveryBy": "Johan Gadolin", "discoveryYear": "1794", "uses": ["LED phosphors", "superconductors"], "compounds": ["Y₂O₃"], "oxidation": "+3", "reactivity": "variable", "x": 3, "y": 5, "block": "d", "shells": [2, 8, 18, 11], "shellText": "2, 8, 18, 11", "trendRadius": 1.725, "trendEN": 0.76}, {"number": 40, "symbol": "Zr", "name": "Zirconium", "group": 4, "period": 5, "category": "Transition Metal", "state": "Solid", "mass": "91.224", "electronConfig": "[Kr] 4d² 5s²", "discoveryBy": "Martin Heinrich Klaproth", "discoveryYear": "1789", "uses": ["nuclear cladding", "ceramics"], "compounds": ["ZrO₂"], "oxidation": "+4", "reactivity": "variable", "x": 4, "y": 5, "block": "d", "shells": [2, 8, 18, 12], "shellText": "2, 8, 18, 12", "trendRadius": 1.7, "trendEN": 0.88}, {"number": 41, "symbol": "Nb", "name": "Niobium", "group": 5, "period": 5, "category": "Transition Metal", "state": "Solid", "mass": "92.906", "electronConfig": "[Kr] 4d⁴ 5s¹", "discoveryBy": "Charles Hatchett", "discoveryYear": "1801", "uses": ["superconductors", "steel alloys"], "compounds": ["Nb₂O₅"], "oxidation": "+3, +5", "reactivity": "variable", "x": 5, "y": 5, "block": "d", "shells": [2, 8, 18, 13], "shellText": "2, 8, 18, 13", "trendRadius": 1.675, "trendEN": 1.0}, {"number": 42, "symbol": "Mo", "name": "Molybdenum", "group": 6, "period": 5, "category": "Transition Metal", "state": "Solid", "mass": "95.95", "electronConfig": "[Kr] 4d⁵ 5s¹", "discoveryBy": "Carl Wilhelm Scheele", "discoveryYear": "1778", "uses": ["steel alloys", "catalysts"], "compounds": ["MoS₂", "MoO₃"], "oxidation": "+4, +6", "reactivity": "variable", "x": 6, "y": 5, "block": "d", "shells": [2, 8, 18, 14], "shellText": "2, 8, 18, 14", "trendRadius": 1.65, "trendEN": 1.12}, {"number": 43, "symbol": "Tc", "name": "Technetium", "group": 7, "period": 5, "category": "Transition Metal", "state": "Solid", "mass": "[98]", "electronConfig": "[Kr] 4d⁵ 5s²", "discoveryBy": "Perrier and Segrè", "discoveryYear": "1937", "uses": ["medical imaging", "research"], "compounds": ["TcO₄⁻"], "oxidation": "+7", "reactivity": "variable", "x": 7, "y": 5, "block": "d", "shells": [2, 8, 18, 15], "shellText": "2, 8, 18, 15", "trendRadius": 1.625, "trendEN": 1.24}, {"number": 44, "symbol": "Ru", "name": "Ruthenium", "group": 8, "period": 5, "category": "Transition Metal", "state": "Solid", "mass": "101.07", "electronConfig": "[Kr] 4d⁷ 5s¹", "discoveryBy": "Karl Ernst Claus", "discoveryYear": "1844", "uses": ["electrical contacts", "catalysts"], "compounds": ["RuO₂"], "oxidation": "+3, +4, +8", "reactivity": "variable", "x": 8, "y": 5, "block": "d", "shells": [2, 8, 18, 16], "shellText": "2, 8, 18, 16", "trendRadius": 1.6, "trendEN": 1.36}, {"number": 45, "symbol": "Rh", "name": "Rhodium", "group": 9, "period": 5, "category": "Transition Metal", "state": "Solid", "mass": "102.91", "electronConfig": "[Kr] 4d⁸ 5s¹", "discoveryBy": "William Hyde Wollaston", "discoveryYear": "1803", "uses": ["catalytic converters", "reflective coatings"], "compounds": ["RhCl₃"], "oxidation": "+3", "reactivity": "variable", "x": 9, "y": 5, "block": "d", "shells": [2, 8, 18, 17], "shellText": "2, 8, 18, 17", "trendRadius": 1.575, "trendEN": 1.48}, {"number": 46, "symbol": "Pd", "name": "Palladium", "group": 10, "period": 5, "category": "Transition Metal", "state": "Solid", "mass": "106.42", "electronConfig": "[Kr] 4d¹⁰", "discoveryBy": "William Hyde Wollaston", "discoveryYear": "1803", "uses": ["catalytic converters", "electronics"], "compounds": ["PdCl₂"], "oxidation": "+2, +4", "reactivity": "variable", "x": 10, "y": 5, "block": "d", "shells": [2, 8, 18, 18], "shellText": "2, 8, 18, 18", "trendRadius": 1.55, "trendEN": 1.6}, {"number": 47, "symbol": "Ag", "name": "Silver", "group": 11, "period": 5, "category": "Transition Metal", "state": "Solid", "mass": "107.87", "electronConfig": "[Kr] 4d¹⁰ 5s¹", "discoveryBy": "Known since antiquity", "discoveryYear": "Ancient", "uses": ["jewelry", "electronics"], "compounds": ["AgNO₃", "AgCl"], "oxidation": "+1", "reactivity": "variable", "x": 11, "y": 5, "block": "d", "shells": [2, 8, 18, 19], "shellText": "2, 8, 18, 19", "trendRadius": 1.525, "trendEN": 1.72}, {"number": 48, "symbol": "Cd", "name": "Cadmium", "group": 12, "period": 5, "category": "Transition Metal", "state": "Solid", "mass": "112.41", "electronConfig": "[Kr] 4d¹⁰ 5s²", "discoveryBy": "Friedrich Stromeyer", "discoveryYear": "1817", "uses": ["batteries", "pigments"], "compounds": ["CdS", "CdO"], "oxidation": "+2", "reactivity": "variable", "x": 12, "y": 5, "block": "d", "shells": [2, 8, 18, 20], "shellText": "2, 8, 18, 20", "trendRadius": 1.5, "trendEN": 1.84}, {"number": 49, "symbol": "In", "name": "Indium", "group": 13, "period": 5, "category": "Post-transition Metal", "state": "Solid", "mass": "114.82", "electronConfig": "[Kr] 4d¹⁰ 5s² 5p¹", "discoveryBy": "Reich and Richter", "discoveryYear": "1863", "uses": ["touchscreens", "solders"], "compounds": ["In₂O₃"], "oxidation": "+3", "reactivity": "moderate", "x": 13, "y": 5, "block": "p", "shells": [2, 8, 18, 21], "shellText": "2, 8, 18, 21", "trendRadius": 1.475, "trendEN": 1.96}, {"number": 50, "symbol": "Sn", "name": "Tin", "group": 14, "period": 5, "category": "Post-transition Metal", "state": "Solid", "mass": "118.71", "electronConfig": "[Kr] 4d¹⁰ 5s² 5p²", "discoveryBy": "Known since antiquity", "discoveryYear": "Ancient", "uses": ["solder", "coatings"], "compounds": ["SnO₂", "SnCl₂"], "oxidation": "+2, +4", "reactivity": "moderate", "x": 14, "y": 5, "block": "p", "shells": [2, 8, 18, 22], "shellText": "2, 8, 18, 22", "trendRadius": 1.45, "trendEN": 2.08}, {"number": 51, "symbol": "Sb", "name": "Antimony", "group": 15, "period": 5, "category": "Metalloid", "state": "Solid", "mass": "121.76", "electronConfig": "[Kr] 4d¹⁰ 5s² 5p³", "discoveryBy": "Known since antiquity", "discoveryYear": "Ancient", "uses": ["flame retardants", "alloys"], "compounds": ["Sb₂O₃"], "oxidation": "-3, +3, +5", "reactivity": "moderate", "x": 15, "y": 5, "block": "p", "shells": [2, 8, 18, 23], "shellText": "2, 8, 18, 23", "trendRadius": 1.425, "trendEN": 2.2}, {"number": 52, "symbol": "Te", "name": "Tellurium", "group": 16, "period": 5, "category": "Metalloid", "state": "Solid", "mass": "127.60", "electronConfig": "[Kr] 4d¹⁰ 5s² 5p⁴", "discoveryBy": "Müller von Reichenstein", "discoveryYear": "1782", "uses": ["solar cells", "alloys"], "compounds": ["TeO₂"], "oxidation": "-2, +4, +6", "reactivity": "moderate", "x": 16, "y": 5, "block": "p", "shells": [2, 8, 18, 24], "shellText": "2, 8, 18, 24", "trendRadius": 1.4, "trendEN": 2.32}, {"number": 53, "symbol": "I", "name": "Iodine", "group": 17, "period": 5, "category": "Halogen", "state": "Solid", "mass": "126.90", "electronConfig": "[Kr] 4d¹⁰ 5s² 5p⁵", "discoveryBy": "Bernard Courtois", "discoveryYear": "1811", "uses": ["antiseptics", "nutrition"], "compounds": ["KI", "I₂"], "oxidation": "-1, +1, +5, +7", "reactivity": "very high", "x": 17, "y": 5, "block": "p", "shells": [2, 8, 18, 25], "shellText": "2, 8, 18, 25", "trendRadius": 1.375, "trendEN": 2.84}, {"number": 54, "symbol": "Xe", "name": "Xenon", "group": 18, "period": 5, "category": "Noble Gas", "state": "Gas", "mass": "131.29", "electronConfig": "[Kr] 4d¹⁰ 5s² 5p⁶", "discoveryBy": "Ramsay and Travers", "discoveryYear": "1898", "uses": ["flash lamps", "anesthesia"], "compounds": ["XeF₂", "XeF₄"], "oxidation": "0, +2, +4, +6, +8", "reactivity": "very low", "x": 18, "y": 5, "block": "p", "shells": [2, 8, 18, 26], "shellText": "2, 8, 18, 26", "trendRadius": 1.35, "trendEN": 2.06}, {"number": 55, "symbol": "Cs", "name": "Cesium", "group": 1, "period": 6, "category": "Alkali Metal", "state": "Solid", "mass": "132.91", "electronConfig": "[Xe] 6s¹", "discoveryBy": "Robert Bunsen and Gustav Kirchhoff", "discoveryYear": "1860", "uses": ["atomic clocks", "photoelectric cells"], "compounds": ["CsCl", "Cs₂CO₃"], "oxidation": "+1", "reactivity": "very high", "x": 1, "y": 6, "block": "s", "shells": [2, 8, 18, 27], "shellText": "2, 8, 18, 27", "trendRadius": 1.935, "trendEN": 0.44}, {"number": 56, "symbol": "Ba", "name": "Barium", "group": 2, "period": 6, "category": "Alkaline Earth Metal", "state": "Solid", "mass": "137.33", "electronConfig": "[Xe] 6s²", "discoveryBy": "Carl Wilhelm Scheele", "discoveryYear": "1772", "uses": ["X-ray contrast compounds", "fireworks"], "compounds": ["BaSO₄", "BaCO₃"], "oxidation": "+2", "reactivity": "high", "x": 2, "y": 6, "block": "s", "shells": [2, 8, 18, 28], "shellText": "2, 8, 18, 28", "trendRadius": 1.91, "trendEN": 0.56}, {"number": 57, "symbol": "La", "name": "Lanthanum", "group": 3, "period": 6, "category": "Lanthanide", "state": "Solid", "mass": "138.91", "electronConfig": "[Xe] 5d¹ 6s²", "discoveryBy": "Carl Gustaf Mosander", "discoveryYear": "1839", "uses": ["camera lenses", "battery electrodes"], "compounds": ["La₂O₃"], "oxidation": "+3", "reactivity": "high", "x": 3, "y": 9, "block": "f", "shells": [2, 8, 18, 29], "shellText": "2, 8, 18, 29", "trendRadius": 1.885, "trendEN": 0.68}, {"number": 58, "symbol": "Ce", "name": "Cerium", "group": 3, "period": 6, "category": "Lanthanide", "state": "Solid", "mass": "140.12", "electronConfig": "[Xe] 4f¹ 5d¹ 6s²", "discoveryBy": "Martin Heinrich Klaproth / Berzelius later isolation", "discoveryYear": "1803/1839", "uses": ["catalysts", "glass polishing"], "compounds": ["CeO₂"], "oxidation": "+3, +4", "reactivity": "high", "x": 4, "y": 9, "block": "f", "shells": [2, 8, 18, 30], "shellText": "2, 8, 18, 30", "trendRadius": 1.885, "trendEN": 0.68}, {"number": 59, "symbol": "Pr", "name": "Praseodymium", "group": 3, "period": 6, "category": "Lanthanide", "state": "Solid", "mass": "123.9", "electronConfig": "2, 8, 18, 31 shells · f-block", "discoveryBy": "Periodic table era chemists", "discoveryYear": "19th–20th century", "uses": ["praseodymium chemistry", "materials research"], "compounds": ["Pr oxides", "Pr salts"], "oxidation": "+3", "reactivity": "high", "x": 5, "y": 9, "block": "f", "shells": [2, 8, 18, 31], "shellText": "2, 8, 18, 31", "trendRadius": 1.885, "trendEN": 0.68}, {"number": 60, "symbol": "Nd", "name": "Neodymium", "group": 3, "period": 6, "category": "Lanthanide", "state": "Solid", "mass": "144.24", "electronConfig": "[Xe] 4f⁴ 6s²", "discoveryBy": "Carl Auer von Welsbach", "discoveryYear": "1885", "uses": ["strong magnets", "lasers"], "compounds": ["Nd₂O₃"], "oxidation": "+3", "reactivity": "high", "x": 6, "y": 9, "block": "f", "shells": [2, 8, 18, 32], "shellText": "2, 8, 18, 32", "trendRadius": 1.885, "trendEN": 0.68}, {"number": 61, "symbol": "Pm", "name": "Promethium", "group": 3, "period": 6, "category": "Lanthanide", "state": "Solid", "mass": "128.1", "electronConfig": "2, 8, 18, 32, 1 shells · f-block", "discoveryBy": "Periodic table era chemists", "discoveryYear": "19th–20th century", "uses": ["promethium chemistry", "materials research"], "compounds": ["Pm oxides", "Pm salts"], "oxidation": "+3", "reactivity": "high", "x": 7, "y": 9, "block": "f", "shells": [2, 8, 18, 32, 1], "shellText": "2, 8, 18, 32, 1", "trendRadius": 1.885, "trendEN": 0.68}, {"number": 62, "symbol": "Sm", "name": "Samarium", "group": 3, "period": 6, "category": "Lanthanide", "state": "Solid", "mass": "130.2", "electronConfig": "2, 8, 18, 32, 2 shells · f-block", "discoveryBy": "Periodic table era chemists", "discoveryYear": "19th–20th century", "uses": ["samarium chemistry", "materials research"], "compounds": ["Sm oxides", "Sm salts"], "oxidation": "+3", "reactivity": "high", "x": 8, "y": 9, "block": "f", "shells": [2, 8, 18, 32, 2], "shellText": "2, 8, 18, 32, 2", "trendRadius": 1.885, "trendEN": 0.68}, {"number": 63, "symbol": "Eu", "name": "Europium", "group": 3, "period": 6, "category": "Lanthanide", "state": "Solid", "mass": "151.96", "electronConfig": "[Xe] 4f⁷ 6s²", "discoveryBy": "Eugène-Anatole Demarçay", "discoveryYear": "1901", "uses": ["red phosphors", "nuclear control materials"], "compounds": ["Eu₂O₃"], "oxidation": "+2, +3", "reactivity": "high", "x": 9, "y": 9, "block": "f", "shells": [2, 8, 18, 32, 3], "shellText": "2, 8, 18, 32, 3", "trendRadius": 1.885, "trendEN": 0.68}, {"number": 64, "symbol": "Gd", "name": "Gadolinium", "group": 3, "period": 6, "category": "Lanthanide", "state": "Solid", "mass": "157.25", "electronConfig": "[Xe] 4f⁷ 5d¹ 6s²", "discoveryBy": "Jean Charles Galissard de Marignac", "discoveryYear": "1880", "uses": ["MRI contrast agents", "neutron absorption"], "compounds": ["Gd₂O₃"], "oxidation": "+3", "reactivity": "high", "x": 10, "y": 9, "block": "f", "shells": [2, 8, 18, 32, 4], "shellText": "2, 8, 18, 32, 4", "trendRadius": 1.885, "trendEN": 0.68}, {"number": 65, "symbol": "Tb", "name": "Terbium", "group": 3, "period": 6, "category": "Lanthanide", "state": "Solid", "mass": "136.5", "electronConfig": "2, 8, 18, 32, 5 shells · f-block", "discoveryBy": "Periodic table era chemists", "discoveryYear": "19th–20th century", "uses": ["terbium chemistry", "materials research"], "compounds": ["Tb oxides", "Tb salts"], "oxidation": "+3", "reactivity": "high", "x": 11, "y": 9, "block": "f", "shells": [2, 8, 18, 32, 5], "shellText": "2, 8, 18, 32, 5", "trendRadius": 1.885, "trendEN": 0.68}, {"number": 66, "symbol": "Dy", "name": "Dysprosium", "group": 3, "period": 6, "category": "Lanthanide", "state": "Solid", "mass": "138.6", "electronConfig": "2, 8, 18, 32, 6 shells · f-block", "discoveryBy": "Periodic table era chemists", "discoveryYear": "19th–20th century", "uses": ["dysprosium chemistry", "materials research"], "compounds": ["Dy oxides", "Dy salts"], "oxidation": "+3", "reactivity": "high", "x": 12, "y": 9, "block": "f", "shells": [2, 8, 18, 32, 6], "shellText": "2, 8, 18, 32, 6", "trendRadius": 1.885, "trendEN": 0.68}, {"number": 67, "symbol": "Ho", "name": "Holmium", "group": 3, "period": 6, "category": "Lanthanide", "state": "Solid", "mass": "140.7", "electronConfig": "2, 8, 18, 32, 7 shells · f-block", "discoveryBy": "Periodic table era chemists", "discoveryYear": "19th–20th century", "uses": ["holmium chemistry", "materials research"], "compounds": ["Ho oxides", "Ho salts"], "oxidation": "+3", "reactivity": "high", "x": 13, "y": 9, "block": "f", "shells": [2, 8, 18, 32, 7], "shellText": "2, 8, 18, 32, 7", "trendRadius": 1.885, "trendEN": 0.68}, {"number": 68, "symbol": "Er", "name": "Erbium", "group": 3, "period": 6, "category": "Lanthanide", "state": "Solid", "mass": "142.8", "electronConfig": "2, 8, 18, 32, 8 shells · f-block", "discoveryBy": "Periodic table era chemists", "discoveryYear": "19th–20th century", "uses": ["erbium chemistry", "materials research"], "compounds": ["Er oxides", "Er salts"], "oxidation": "+3", "reactivity": "high", "x": 14, "y": 9, "block": "f", "shells": [2, 8, 18, 32, 8], "shellText": "2, 8, 18, 32, 8", "trendRadius": 1.885, "trendEN": 0.68}, {"number": 69, "symbol": "Tm", "name": "Thulium", "group": 3, "period": 6, "category": "Lanthanide", "state": "Solid", "mass": "144.9", "electronConfig": "2, 8, 18, 32, 9 shells · f-block", "discoveryBy": "Periodic table era chemists", "discoveryYear": "19th–20th century", "uses": ["thulium chemistry", "materials research"], "compounds": ["Tm oxides", "Tm salts"], "oxidation": "+3", "reactivity": "high", "x": 15, "y": 9, "block": "f", "shells": [2, 8, 18, 32, 9], "shellText": "2, 8, 18, 32, 9", "trendRadius": 1.885, "trendEN": 0.68}, {"number": 70, "symbol": "Yb", "name": "Ytterbium", "group": 3, "period": 6, "category": "Lanthanide", "state": "Solid", "mass": "147.0", "electronConfig": "2, 8, 18, 32, 10 shells · f-block", "discoveryBy": "Periodic table era chemists", "discoveryYear": "19th–20th century", "uses": ["ytterbium chemistry", "materials research"], "compounds": ["Yb oxides", "Yb salts"], "oxidation": "+3", "reactivity": "high", "x": 16, "y": 9, "block": "f", "shells": [2, 8, 18, 32, 10], "shellText": "2, 8, 18, 32, 10", "trendRadius": 1.885, "trendEN": 0.68}, {"number": 71, "symbol": "Lu", "name": "Lutetium", "group": 3, "period": 6, "category": "Lanthanide", "state": "Solid", "mass": "174.97", "electronConfig": "[Xe] 4f¹⁴ 5d¹ 6s²", "discoveryBy": "Georges Urbain", "discoveryYear": "1907", "uses": ["PET detectors", "catalysts"], "compounds": ["Lu₂O₃"], "oxidation": "+3", "reactivity": "high", "x": 17, "y": 9, "block": "d", "shells": [2, 8, 18, 32, 11], "shellText": "2, 8, 18, 32, 11", "trendRadius": 1.885, "trendEN": 0.68}, {"number": 72, "symbol": "Hf", "name": "Hafnium", "group": 4, "period": 6, "category": "Transition Metal", "state": "Solid", "mass": "178.49", "electronConfig": "[Xe] 4f¹⁴ 5d² 6s²", "discoveryBy": "Dirk Coster and George de Hevesy", "discoveryYear": "1923", "uses": ["nuclear control rods", "electronics"], "compounds": ["HfO₂"], "oxidation": "+4", "reactivity": "variable", "x": 4, "y": 6, "block": "d", "shells": [2, 8, 18, 32, 12], "shellText": "2, 8, 18, 32, 12", "trendRadius": 1.86, "trendEN": 0.8}, {"number": 73, "symbol": "Ta", "name": "Tantalum", "group": 5, "period": 6, "category": "Transition Metal", "state": "Solid", "mass": "180.95", "electronConfig": "[Xe] 4f¹⁴ 5d³ 6s²", "discoveryBy": "Anders Gustaf Ekeberg", "discoveryYear": "1802", "uses": ["capacitors", "surgical implants"], "compounds": ["Ta₂O₅"], "oxidation": "+5", "reactivity": "variable", "x": 5, "y": 6, "block": "d", "shells": [2, 8, 18, 32, 13], "shellText": "2, 8, 18, 32, 13", "trendRadius": 1.835, "trendEN": 0.92}, {"number": 74, "symbol": "W", "name": "Tungsten", "group": 6, "period": 6, "category": "Transition Metal", "state": "Solid", "mass": "183.84", "electronConfig": "[Xe] 4f¹⁴ 5d⁴ 6s²", "discoveryBy": "Carl Wilhelm Scheele", "discoveryYear": "1781", "uses": ["high-temp filaments", "hard metals"], "compounds": ["WO₃", "WC"], "oxidation": "+4, +6", "reactivity": "variable", "x": 6, "y": 6, "block": "d", "shells": [2, 8, 18, 32, 14], "shellText": "2, 8, 18, 32, 14", "trendRadius": 1.81, "trendEN": 1.04}, {"number": 75, "symbol": "Re", "name": "Rhenium", "group": 7, "period": 6, "category": "Transition Metal", "state": "Solid", "mass": "157.5", "electronConfig": "2, 8, 18, 32, 15 shells · d-block", "discoveryBy": "Periodic table era chemists", "discoveryYear": "19th–20th century", "uses": ["rhenium chemistry", "materials research"], "compounds": ["Re oxides", "Re salts"], "oxidation": "variable", "reactivity": "variable", "x": 7, "y": 6, "block": "d", "shells": [2, 8, 18, 32, 15], "shellText": "2, 8, 18, 32, 15", "trendRadius": 1.785, "trendEN": 1.16}, {"number": 76, "symbol": "Os", "name": "Osmium", "group": 8, "period": 6, "category": "Transition Metal", "state": "Solid", "mass": "159.6", "electronConfig": "2, 8, 18, 32, 16 shells · d-block", "discoveryBy": "Periodic table era chemists", "discoveryYear": "19th–20th century", "uses": ["osmium chemistry", "materials research"], "compounds": ["Os oxides", "Os salts"], "oxidation": "variable", "reactivity": "variable", "x": 8, "y": 6, "block": "d", "shells": [2, 8, 18, 32, 16], "shellText": "2, 8, 18, 32, 16", "trendRadius": 1.76, "trendEN": 1.28}, {"number": 77, "symbol": "Ir", "name": "Iridium", "group": 9, "period": 6, "category": "Transition Metal", "state": "Solid", "mass": "161.7", "electronConfig": "2, 8, 18, 32, 17 shells · d-block", "discoveryBy": "Periodic table era chemists", "discoveryYear": "19th–20th century", "uses": ["iridium chemistry", "materials research"], "compounds": ["Ir oxides", "Ir salts"], "oxidation": "variable", "reactivity": "variable", "x": 9, "y": 6, "block": "d", "shells": [2, 8, 18, 32, 17], "shellText": "2, 8, 18, 32, 17", "trendRadius": 1.735, "trendEN": 1.4}, {"number": 78, "symbol": "Pt", "name": "Platinum", "group": 10, "period": 6, "category": "Transition Metal", "state": "Solid", "mass": "195.08", "electronConfig": "[Xe] 4f¹⁴ 5d⁹ 6s¹", "discoveryBy": "Antonio de Ulloa", "discoveryYear": "1735", "uses": ["catalytic converters", "jewelry"], "compounds": ["PtCl₄"], "oxidation": "+2, +4", "reactivity": "variable", "x": 10, "y": 6, "block": "d", "shells": [2, 8, 18, 32, 18], "shellText": "2, 8, 18, 32, 18", "trendRadius": 1.71, "trendEN": 1.52}, {"number": 79, "symbol": "Au", "name": "Gold", "group": 11, "period": 6, "category": "Transition Metal", "state": "Solid", "mass": "196.97", "electronConfig": "[Xe] 4f¹⁴ 5d¹⁰ 6s¹", "discoveryBy": "Known since antiquity", "discoveryYear": "Ancient", "uses": ["jewelry", "electronic contacts"], "compounds": ["AuCl₃"], "oxidation": "+1, +3", "reactivity": "variable", "x": 11, "y": 6, "block": "d", "shells": [2, 8, 18, 32, 19], "shellText": "2, 8, 18, 32, 19", "trendRadius": 1.685, "trendEN": 1.64}, {"number": 80, "symbol": "Hg", "name": "Mercury", "group": 12, "period": 6, "category": "Transition Metal", "state": "Liquid", "mass": "200.59", "electronConfig": "[Xe] 4f¹⁴ 5d¹⁰ 6s²", "discoveryBy": "Known since antiquity", "discoveryYear": "Ancient", "uses": ["scientific instruments", "research"], "compounds": ["HgCl₂", "HgS"], "oxidation": "+1, +2", "reactivity": "variable", "x": 12, "y": 6, "block": "d", "shells": [2, 8, 18, 32, 20], "shellText": "2, 8, 18, 32, 20", "trendRadius": 1.66, "trendEN": 1.76}, {"number": 81, "symbol": "Tl", "name": "Thallium", "group": 13, "period": 6, "category": "Post-transition Metal", "state": "Solid", "mass": "170.1", "electronConfig": "2, 8, 18, 32, 21 shells · p-block", "discoveryBy": "Periodic table era chemists", "discoveryYear": "19th–20th century", "uses": ["thallium chemistry", "materials research"], "compounds": ["Tl oxides", "Tl salts"], "oxidation": "+3", "reactivity": "moderate", "x": 13, "y": 6, "block": "p", "shells": [2, 8, 18, 32, 21], "shellText": "2, 8, 18, 32, 21", "trendRadius": 1.635, "trendEN": 1.88}, {"number": 82, "symbol": "Pb", "name": "Lead", "group": 14, "period": 6, "category": "Post-transition Metal", "state": "Solid", "mass": "207.2", "electronConfig": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²", "discoveryBy": "Known since antiquity", "discoveryYear": "Ancient", "uses": ["radiation shielding", "batteries historically"], "compounds": ["PbO", "PbS"], "oxidation": "+2, +4", "reactivity": "moderate", "x": 14, "y": 6, "block": "p", "shells": [2, 8, 18, 32, 22], "shellText": "2, 8, 18, 32, 22", "trendRadius": 1.61, "trendEN": 2.0}, {"number": 83, "symbol": "Bi", "name": "Bismuth", "group": 15, "period": 6, "category": "Post-transition Metal", "state": "Solid", "mass": "208.98", "electronConfig": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³", "discoveryBy": "Claude François Geoffroy", "discoveryYear": "1753", "uses": ["medicines", "low-melting alloys"], "compounds": ["Bi₂O₃"], "oxidation": "+3, +5", "reactivity": "moderate", "x": 15, "y": 6, "block": "p", "shells": [2, 8, 18, 32, 23], "shellText": "2, 8, 18, 32, 23", "trendRadius": 1.585, "trendEN": 2.12}, {"number": 84, "symbol": "Po", "name": "Polonium", "group": 16, "period": 6, "category": "Metalloid", "state": "Solid", "mass": "176.4", "electronConfig": "2, 8, 18, 32, 24 shells · p-block", "discoveryBy": "Periodic table era chemists", "discoveryYear": "19th–20th century", "uses": ["polonium chemistry", "materials research"], "compounds": ["Po oxides", "Po salts"], "oxidation": "-2, +4, +6", "reactivity": "moderate", "x": 16, "y": 6, "block": "p", "shells": [2, 8, 18, 32, 24], "shellText": "2, 8, 18, 32, 24", "trendRadius": 1.56, "trendEN": 2.24}, {"number": 85, "symbol": "At", "name": "Astatine", "group": 17, "period": 6, "category": "Halogen", "state": "Solid", "mass": "178.5", "electronConfig": "2, 8, 18, 32, 25 shells · p-block", "discoveryBy": "Periodic table era chemists", "discoveryYear": "19th–20th century", "uses": ["astatine chemistry", "materials research"], "compounds": ["At oxides", "At salts"], "oxidation": "-1, +1, +5, +7", "reactivity": "very high", "x": 17, "y": 6, "block": "p", "shells": [2, 8, 18, 32, 25], "shellText": "2, 8, 18, 32, 25", "trendRadius": 1.535, "trendEN": 2.76}, {"number": 86, "symbol": "Rn", "name": "Radon", "group": 18, "period": 6, "category": "Noble Gas", "state": "Gas", "mass": "[222]", "electronConfig": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶", "discoveryBy": "Friedrich Ernst Dorn", "discoveryYear": "1900", "uses": ["research", "radiation studies"], "compounds": ["no common stable compounds"], "oxidation": "0", "reactivity": "very low", "x": 18, "y": 6, "block": "p", "shells": [2, 8, 18, 32, 26], "shellText": "2, 8, 18, 32, 26", "trendRadius": 1.51, "trendEN": 1.98}, {"number": 87, "symbol": "Fr", "name": "Francium", "group": 1, "period": 7, "category": "Alkali Metal", "state": "Solid", "mass": "182.7", "electronConfig": "2, 8, 18, 32, 27 shells · s-block", "discoveryBy": "Periodic table era chemists", "discoveryYear": "19th–20th century", "uses": ["francium chemistry", "materials research"], "compounds": ["Fr oxides", "Fr salts"], "oxidation": "+1", "reactivity": "very high", "x": 1, "y": 7, "block": "s", "shells": [2, 8, 18, 32, 27], "shellText": "2, 8, 18, 32, 27", "trendRadius": 2.095, "trendEN": 0.4}, {"number": 88, "symbol": "Ra", "name": "Radium", "group": 2, "period": 7, "category": "Alkaline Earth Metal", "state": "Solid", "mass": "184.8", "electronConfig": "2, 8, 18, 32, 28 shells · s-block", "discoveryBy": "Periodic table era chemists", "discoveryYear": "19th–20th century", "uses": ["radium chemistry", "materials research"], "compounds": ["Ra oxides", "Ra salts"], "oxidation": "+2", "reactivity": "high", "x": 2, "y": 7, "block": "s", "shells": [2, 8, 18, 32, 28], "shellText": "2, 8, 18, 32, 28", "trendRadius": 2.07, "trendEN": 0.48}, {"number": 89, "symbol": "Ac", "name": "Actinium", "group": 3, "period": 7, "category": "Actinide", "state": "Solid", "mass": "[227]", "electronConfig": "[Rn] 6d¹ 7s²", "discoveryBy": "André-Louis Debierne", "discoveryYear": "1899", "uses": ["research", "neutron sources"], "compounds": ["Ac₂O₃"], "oxidation": "+3", "reactivity": "high", "x": 3, "y": 10, "block": "f", "shells": [2, 8, 18, 32, 29], "shellText": "2, 8, 18, 32, 29", "trendRadius": 2.045, "trendEN": 0.6}, {"number": 90, "symbol": "Th", "name": "Thorium", "group": 3, "period": 7, "category": "Actinide", "state": "Solid", "mass": "232.04", "electronConfig": "[Rn] 6d² 7s²", "discoveryBy": "Jöns Jacob Berzelius", "discoveryYear": "1828", "uses": ["potential nuclear fuel", "alloys"], "compounds": ["ThO₂"], "oxidation": "+4", "reactivity": "high", "x": 4, "y": 10, "block": "f", "shells": [2, 8, 18, 32, 30], "shellText": "2, 8, 18, 32, 30", "trendRadius": 2.045, "trendEN": 0.6}, {"number": 91, "symbol": "Pa", "name": "Protactinium", "group": 3, "period": 7, "category": "Actinide", "state": "Solid", "mass": "231.04", "electronConfig": "[Rn] 5f² 6d¹ 7s²", "discoveryBy": "Kasimir Fajans and O. H. Göhring", "discoveryYear": "1913", "uses": ["research"], "compounds": ["Pa₂O₅"], "oxidation": "+5", "reactivity": "high", "x": 5, "y": 10, "block": "f", "shells": [2, 8, 18, 32, 31], "shellText": "2, 8, 18, 32, 31", "trendRadius": 2.045, "trendEN": 0.6}, {"number": 92, "symbol": "U", "name": "Uranium", "group": 3, "period": 7, "category": "Actinide", "state": "Solid", "mass": "238.03", "electronConfig": "[Rn] 5f³ 6d¹ 7s²", "discoveryBy": "Martin Heinrich Klaproth", "discoveryYear": "1789", "uses": ["nuclear fuel", "scientific research"], "compounds": ["UO₂", "UF₆"], "oxidation": "+4, +6", "reactivity": "high", "x": 6, "y": 10, "block": "f", "shells": [2, 8, 18, 32, 32], "shellText": "2, 8, 18, 32, 32", "trendRadius": 2.045, "trendEN": 0.6}, {"number": 93, "symbol": "Np", "name": "Neptunium", "group": 3, "period": 7, "category": "Actinide", "state": "Solid", "mass": "[237]", "electronConfig": "[Rn] 5f⁴ 6d¹ 7s²", "discoveryBy": "Edwin McMillan and Philip Abelson", "discoveryYear": "1940", "uses": ["research", "neutron detection"], "compounds": ["NpO₂"], "oxidation": "+3, +4, +5, +6, +7", "reactivity": "high", "x": 7, "y": 10, "block": "f", "shells": [2, 8, 18, 32, 32, 1], "shellText": "2, 8, 18, 32, 32, 1", "trendRadius": 2.045, "trendEN": 0.6}, {"number": 94, "symbol": "Pu", "name": "Plutonium", "group": 3, "period": 7, "category": "Actinide", "state": "Solid", "mass": "[244]", "electronConfig": "[Rn] 5f⁶ 7s²", "discoveryBy": "Glenn Seaborg and team", "discoveryYear": "1940", "uses": ["nuclear fuel", "space power sources"], "compounds": ["PuO₂"], "oxidation": "+3, +4, +5, +6", "reactivity": "high", "x": 8, "y": 10, "block": "f", "shells": [2, 8, 18, 32, 32, 2], "shellText": "2, 8, 18, 32, 32, 2", "trendRadius": 2.045, "trendEN": 0.6}, {"number": 95, "symbol": "Am", "name": "Americium", "group": 3, "period": 7, "category": "Actinide", "state": "Solid", "mass": "[243]", "electronConfig": "[Rn] 5f⁷ 7s²", "discoveryBy": "Seaborg, James, Morgan, Ghiorso", "discoveryYear": "1944", "uses": ["smoke detectors", "research"], "compounds": ["AmO₂"], "oxidation": "+3, +4, +5, +6", "reactivity": "high", "x": 9, "y": 10, "block": "f", "shells": [2, 8, 18, 32, 32, 3], "shellText": "2, 8, 18, 32, 32, 3", "trendRadius": 2.045, "trendEN": 0.6}, {"number": 96, "symbol": "Cm", "name": "Curium", "group": 3, "period": 7, "category": "Actinide", "state": "Solid", "mass": "[192]", "electronConfig": "2, 8, 18, 32, 32, 4 shells · f-block", "discoveryBy": "Periodic table era chemists", "discoveryYear": "19th–20th century", "uses": ["curium chemistry", "materials research"], "compounds": ["Cm oxides", "Cm salts"], "oxidation": "+3, +4", "reactivity": "high", "x": 10, "y": 10, "block": "f", "shells": [2, 8, 18, 32, 32, 4], "shellText": "2, 8, 18, 32, 32, 4", "trendRadius": 2.045, "trendEN": 0.6}, {"number": 97, "symbol": "Bk", "name": "Berkelium", "group": 3, "period": 7, "category": "Actinide", "state": "Solid", "mass": "[194]", "electronConfig": "2, 8, 18, 32, 32, 5 shells · f-block", "discoveryBy": "Periodic table era chemists", "discoveryYear": "19th–20th century", "uses": ["berkelium chemistry", "materials research"], "compounds": ["Bk oxides", "Bk salts"], "oxidation": "+3, +4", "reactivity": "high", "x": 11, "y": 10, "block": "f", "shells": [2, 8, 18, 32, 32, 5], "shellText": "2, 8, 18, 32, 32, 5", "trendRadius": 2.045, "trendEN": 0.6}, {"number": 98, "symbol": "Cf", "name": "Californium", "group": 3, "period": 7, "category": "Actinide", "state": "Solid", "mass": "[196]", "electronConfig": "2, 8, 18, 32, 32, 6 shells · f-block", "discoveryBy": "Periodic table era chemists", "discoveryYear": "19th–20th century", "uses": ["californium chemistry", "materials research"], "compounds": ["Cf oxides", "Cf salts"], "oxidation": "+3, +4", "reactivity": "high", "x": 12, "y": 10, "block": "f", "shells": [2, 8, 18, 32, 32, 6], "shellText": "2, 8, 18, 32, 32, 6", "trendRadius": 2.045, "trendEN": 0.6}, {"number": 99, "symbol": "Es", "name": "Einsteinium", "group": 3, "period": 7, "category": "Actinide", "state": "Solid", "mass": "[198]", "electronConfig": "2, 8, 18, 32, 32, 7 shells · f-block", "discoveryBy": "Periodic table era chemists", "discoveryYear": "19th–20th century", "uses": ["einsteinium chemistry", "materials research"], "compounds": ["Es oxides", "Es salts"], "oxidation": "+3, +4", "reactivity": "high", "x": 13, "y": 10, "block": "f", "shells": [2, 8, 18, 32, 32, 7], "shellText": "2, 8, 18, 32, 32, 7", "trendRadius": 2.045, "trendEN": 0.6}, {"number": 100, "symbol": "Fm", "name": "Fermium", "group": 3, "period": 7, "category": "Actinide", "state": "Solid", "mass": "[200]", "electronConfig": "2, 8, 18, 32, 32, 8 shells · f-block", "discoveryBy": "Periodic table era chemists", "discoveryYear": "19th–20th century", "uses": ["fermium chemistry", "materials research"], "compounds": ["Fm oxides", "Fm salts"], "oxidation": "+3, +4", "reactivity": "high", "x": 14, "y": 10, "block": "f", "shells": [2, 8, 18, 32, 32, 8], "shellText": "2, 8, 18, 32, 32, 8", "trendRadius": 2.045, "trendEN": 0.6}, {"number": 101, "symbol": "Md", "name": "Mendelevium", "group": 3, "period": 7, "category": "Actinide", "state": "Solid", "mass": "[202]", "electronConfig": "2, 8, 18, 32, 32, 9 shells · f-block", "discoveryBy": "Periodic table era chemists", "discoveryYear": "19th–20th century", "uses": ["mendelevium chemistry", "materials research"], "compounds": ["Md oxides", "Md salts"], "oxidation": "+3, +4", "reactivity": "high", "x": 15, "y": 10, "block": "f", "shells": [2, 8, 18, 32, 32, 9], "shellText": "2, 8, 18, 32, 32, 9", "trendRadius": 2.045, "trendEN": 0.6}, {"number": 102, "symbol": "No", "name": "Nobelium", "group": 3, "period": 7, "category": "Actinide", "state": "Solid", "mass": "[204]", "electronConfig": "2, 8, 18, 32, 32, 10 shells · f-block", "discoveryBy": "Periodic table era chemists", "discoveryYear": "19th–20th century", "uses": ["nobelium chemistry", "materials research"], "compounds": ["No oxides", "No salts"], "oxidation": "+3, +4", "reactivity": "high", "x": 16, "y": 10, "block": "f", "shells": [2, 8, 18, 32, 32, 10], "shellText": "2, 8, 18, 32, 32, 10", "trendRadius": 2.045, "trendEN": 0.6}, {"number": 103, "symbol": "Lr", "name": "Lawrencium", "group": 3, "period": 7, "category": "Actinide", "state": "Solid", "mass": "[206]", "electronConfig": "2, 8, 18, 32, 32, 11 shells · d-block", "discoveryBy": "Periodic table era chemists", "discoveryYear": "19th–20th century", "uses": ["lawrencium chemistry", "materials research"], "compounds": ["Lr oxides", "Lr salts"], "oxidation": "+3, +4", "reactivity": "high", "x": 17, "y": 10, "block": "d", "shells": [2, 8, 18, 32, 32, 11], "shellText": "2, 8, 18, 32, 32, 11", "trendRadius": 2.045, "trendEN": 0.6}, {"number": 104, "symbol": "Rf", "name": "Rutherfordium", "group": 4, "period": 7, "category": "Transition Metal", "state": "Unknown", "mass": "[208]", "electronConfig": "2, 8, 18, 32, 32, 12 shells · d-block", "discoveryBy": "Periodic table era chemists", "discoveryYear": "19th–20th century", "uses": ["rutherfordium chemistry", "materials research"], "compounds": ["Rf oxides", "Rf salts"], "oxidation": "variable", "reactivity": "variable", "x": 4, "y": 7, "block": "d", "shells": [2, 8, 18, 32, 32, 12], "shellText": "2, 8, 18, 32, 32, 12", "trendRadius": 2.02, "trendEN": 0.72}, {"number": 105, "symbol": "Db", "name": "Dubnium", "group": 5, "period": 7, "category": "Transition Metal", "state": "Unknown", "mass": "[210]", "electronConfig": "2, 8, 18, 32, 32, 13 shells · d-block", "discoveryBy": "Periodic table era chemists", "discoveryYear": "19th–20th century", "uses": ["dubnium chemistry", "materials research"], "compounds": ["Db oxides", "Db salts"], "oxidation": "variable", "reactivity": "variable", "x": 5, "y": 7, "block": "d", "shells": [2, 8, 18, 32, 32, 13], "shellText": "2, 8, 18, 32, 32, 13", "trendRadius": 1.995, "trendEN": 0.84}, {"number": 106, "symbol": "Sg", "name": "Seaborgium", "group": 6, "period": 7, "category": "Transition Metal", "state": "Unknown", "mass": "[212]", "electronConfig": "2, 8, 18, 32, 32, 14 shells · d-block", "discoveryBy": "Periodic table era chemists", "discoveryYear": "19th–20th century", "uses": ["seaborgium chemistry", "materials research"], "compounds": ["Sg oxides", "Sg salts"], "oxidation": "variable", "reactivity": "variable", "x": 6, "y": 7, "block": "d", "shells": [2, 8, 18, 32, 32, 14], "shellText": "2, 8, 18, 32, 32, 14", "trendRadius": 1.97, "trendEN": 0.96}, {"number": 107, "symbol": "Bh", "name": "Bohrium", "group": 7, "period": 7, "category": "Transition Metal", "state": "Unknown", "mass": "[214]", "electronConfig": "2, 8, 18, 32, 32, 15 shells · d-block", "discoveryBy": "Periodic table era chemists", "discoveryYear": "19th–20th century", "uses": ["bohrium chemistry", "materials research"], "compounds": ["Bh oxides", "Bh salts"], "oxidation": "variable", "reactivity": "variable", "x": 7, "y": 7, "block": "d", "shells": [2, 8, 18, 32, 32, 15], "shellText": "2, 8, 18, 32, 32, 15", "trendRadius": 1.945, "trendEN": 1.08}, {"number": 108, "symbol": "Hs", "name": "Hassium", "group": 8, "period": 7, "category": "Transition Metal", "state": "Unknown", "mass": "[216]", "electronConfig": "2, 8, 18, 32, 32, 16 shells · d-block", "discoveryBy": "Periodic table era chemists", "discoveryYear": "19th–20th century", "uses": ["hassium chemistry", "materials research"], "compounds": ["Hs oxides", "Hs salts"], "oxidation": "variable", "reactivity": "variable", "x": 8, "y": 7, "block": "d", "shells": [2, 8, 18, 32, 32, 16], "shellText": "2, 8, 18, 32, 32, 16", "trendRadius": 1.92, "trendEN": 1.2}, {"number": 109, "symbol": "Mt", "name": "Meitnerium", "group": 9, "period": 7, "category": "Unknown", "state": "Unknown", "mass": "[218]", "electronConfig": "2, 8, 18, 32, 32, 17 shells · d-block", "discoveryBy": "Periodic table era chemists", "discoveryYear": "19th–20th century", "uses": ["meitnerium chemistry", "materials research"], "compounds": ["Mt oxides", "Mt salts"], "oxidation": "variable", "reactivity": "unknown", "x": 9, "y": 7, "block": "d", "shells": [2, 8, 18, 32, 32, 17], "shellText": "2, 8, 18, 32, 32, 17", "trendRadius": 1.895, "trendEN": 1.32}, {"number": 110, "symbol": "Ds", "name": "Darmstadtium", "group": 10, "period": 7, "category": "Unknown", "state": "Unknown", "mass": "[220]", "electronConfig": "2, 8, 18, 32, 32, 18 shells · d-block", "discoveryBy": "Periodic table era chemists", "discoveryYear": "19th–20th century", "uses": ["darmstadtium chemistry", "materials research"], "compounds": ["Ds oxides", "Ds salts"], "oxidation": "variable", "reactivity": "unknown", "x": 10, "y": 7, "block": "d", "shells": [2, 8, 18, 32, 32, 18], "shellText": "2, 8, 18, 32, 32, 18", "trendRadius": 1.87, "trendEN": 1.44}, {"number": 111, "symbol": "Rg", "name": "Roentgenium", "group": 11, "period": 7, "category": "Unknown", "state": "Unknown", "mass": "[222]", "electronConfig": "2, 8, 18, 32, 32, 18, 1 shells · d-block", "discoveryBy": "Periodic table era chemists", "discoveryYear": "19th–20th century", "uses": ["roentgenium chemistry", "materials research"], "compounds": ["Rg oxides", "Rg salts"], "oxidation": "variable", "reactivity": "unknown", "x": 11, "y": 7, "block": "d", "shells": [2, 8, 18, 32, 32, 18, 1], "shellText": "2, 8, 18, 32, 32, 18, 1", "trendRadius": 1.845, "trendEN": 1.56}, {"number": 112, "symbol": "Cn", "name": "Copernicium", "group": 12, "period": 7, "category": "Transition Metal", "state": "Unknown", "mass": "[224]", "electronConfig": "2, 8, 18, 32, 32, 18, 2 shells · d-block", "discoveryBy": "Periodic table era chemists", "discoveryYear": "19th–20th century", "uses": ["copernicium chemistry", "materials research"], "compounds": ["Cn oxides", "Cn salts"], "oxidation": "variable", "reactivity": "variable", "x": 12, "y": 7, "block": "d", "shells": [2, 8, 18, 32, 32, 18, 2], "shellText": "2, 8, 18, 32, 32, 18, 2", "trendRadius": 1.82, "trendEN": 1.68}, {"number": 113, "symbol": "Nh", "name": "Nihonium", "group": 13, "period": 7, "category": "Unknown", "state": "Unknown", "mass": "[226]", "electronConfig": "2, 8, 18, 32, 32, 18, 3 shells · p-block", "discoveryBy": "Periodic table era chemists", "discoveryYear": "19th–20th century", "uses": ["nihonium chemistry", "materials research"], "compounds": ["Nh oxides", "Nh salts"], "oxidation": "+3", "reactivity": "unknown", "x": 13, "y": 7, "block": "p", "shells": [2, 8, 18, 32, 32, 18, 3], "shellText": "2, 8, 18, 32, 32, 18, 3", "trendRadius": 1.795, "trendEN": 1.8}, {"number": 114, "symbol": "Fl", "name": "Flerovium", "group": 14, "period": 7, "category": "Post-transition Metal", "state": "Unknown", "mass": "[228]", "electronConfig": "2, 8, 18, 32, 32, 18, 4 shells · p-block", "discoveryBy": "Periodic table era chemists", "discoveryYear": "19th–20th century", "uses": ["flerovium chemistry", "materials research"], "compounds": ["Fl oxides", "Fl salts"], "oxidation": "±4", "reactivity": "moderate", "x": 14, "y": 7, "block": "p", "shells": [2, 8, 18, 32, 32, 18, 4], "shellText": "2, 8, 18, 32, 32, 18, 4", "trendRadius": 1.77, "trendEN": 1.92}, {"number": 115, "symbol": "Mc", "name": "Moscovium", "group": 15, "period": 7, "category": "Unknown", "state": "Unknown", "mass": "[230]", "electronConfig": "2, 8, 18, 32, 32, 18, 5 shells · p-block", "discoveryBy": "Periodic table era chemists", "discoveryYear": "19th–20th century", "uses": ["moscovium chemistry", "materials research"], "compounds": ["Mc oxides", "Mc salts"], "oxidation": "-3, +3, +5", "reactivity": "unknown", "x": 15, "y": 7, "block": "p", "shells": [2, 8, 18, 32, 32, 18, 5], "shellText": "2, 8, 18, 32, 32, 18, 5", "trendRadius": 1.745, "trendEN": 2.04}, {"number": 116, "symbol": "Lv", "name": "Livermorium", "group": 16, "period": 7, "category": "Unknown", "state": "Unknown", "mass": "[232]", "electronConfig": "2, 8, 18, 32, 32, 18, 6 shells · p-block", "discoveryBy": "Periodic table era chemists", "discoveryYear": "19th–20th century", "uses": ["livermorium chemistry", "materials research"], "compounds": ["Lv oxides", "Lv salts"], "oxidation": "-2, +4, +6", "reactivity": "unknown", "x": 16, "y": 7, "block": "p", "shells": [2, 8, 18, 32, 32, 18, 6], "shellText": "2, 8, 18, 32, 32, 18, 6", "trendRadius": 1.72, "trendEN": 2.16}, {"number": 117, "symbol": "Ts", "name": "Tennessine", "group": 17, "period": 7, "category": "Unknown", "state": "Unknown", "mass": "[234]", "electronConfig": "2, 8, 18, 32, 32, 18, 7 shells · p-block", "discoveryBy": "Periodic table era chemists", "discoveryYear": "19th–20th century", "uses": ["tennessine chemistry", "materials research"], "compounds": ["Ts oxides", "Ts salts"], "oxidation": "variable", "reactivity": "unknown", "x": 17, "y": 7, "block": "p", "shells": [2, 8, 18, 32, 32, 18, 7], "shellText": "2, 8, 18, 32, 32, 18, 7", "trendRadius": 1.695, "trendEN": 2.28}, {"number": 118, "symbol": "Og", "name": "Oganesson", "group": 18, "period": 7, "category": "Noble Gas", "state": "Unknown", "mass": "[294]", "electronConfig": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶", "discoveryBy": "JINR and collaborators", "discoveryYear": "2002–2006", "uses": ["superheavy element research"], "compounds": ["no stable compounds known"], "oxidation": "unknown", "reactivity": "very low", "x": 18, "y": 7, "block": "p", "shells": [2, 8, 18, 32, 32, 18, 8], "shellText": "2, 8, 18, 32, 32, 18, 8", "trendRadius": 1.67, "trendEN": 1.9}];

const COLORS = {
  category: {
    "Alkali Metal":"#ff6b6b","Alkaline Earth Metal":"#f7b267","Transition Metal":"#4dabf7",
    "Post-transition Metal":"#74c69d","Metalloid":"#c77dff","Nonmetal":"#ffd166",
    "Halogen":"#00c2a8","Noble Gas":"#9b5de5","Lanthanide":"#ef476f","Actinide":"#06d6a0","Unknown":"#94a3b8"
  },
  block: {s:"#ff6b6b",p:"#4dabf7",d:"#06d6a0",f:"#c77dff"},
  valency: {"0":"#6c757d","+1":"#ff8fab","+2":"#ffb703","+3":"#8ecae6","+3, +4":"#9d4edd","±4":"#c77dff","variable":"#4cc9f0","-1, +1, +5, +7":"#06d6a0","-3, +3, +5":"#9d4edd","-2, +4, +6":"#f28482"},
  reactivity: {"very low":"#6c757d","moderate":"#4ea8de","moderate to high":"#00b4d8","high":"#ffb703","very high":"#ef476f","variable":"#7b2cbf","unknown":"#94a3b8"}
};

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => [...document.querySelectorAll(sel)];

const table = $('#periodicTable');
const legend = $('#legend');
const popup = $('#popup');
const popupBody = $('#popupBody');
const closePopup = $('#closePopup');
const selectedSummary = $('#selectedSummary');
const searchInput = $('#searchInput');
const categoryFilter = $('#categoryFilter');
const modeFilter = $('#modeFilter');
const groupFilter = $('#groupFilter');
const resetBtn = $('#resetBtn');
const quickBtns = $$('.quick-btn');
const tabs = $$('.tab');
const views = $$('.view');
const flashcard = $('#flashcard');
const flashFront = $('.flash-front');
const flashBack = $('.flash-back');
const flashFilter = $('#flashFilter');
const flashCounter = $('#flashCounter');
const prevFlash = $('#prevFlash');
const nextFlash = $('#nextFlash');
const flipFlash = $('#flipFlash');
const groupStudySelect = $('#groupStudySelect');
const groupStudyInfo = $('#groupStudyInfo');
const groupStudyElements = $('#groupStudyElements');
const trendMetric = $('#trendMetric');
const trendScope = $('#trendScope');
const trendNotes = $('#trendNotes');
const trendCanvas = $('#trendCanvas');
const trendCtx = trendCanvas.getContext('2d');
const buildRevision = $('#buildRevision');
const printSheet = $('#printSheet');
const revisionSheet = $('#revisionSheet');
const atomCanvas = $('#atomCanvas');
const atomCtx = atomCanvas.getContext('2d');
const compareA = $('#compareA');
const compareB = $('#compareB');
const compareGrid = $('#compareGrid');
const compareSummary = $('#compareSummary');

let currentElement = ELEMENTS[0];
let currentQuick = '';
let flashPool = [...ELEMENTS];
let flashIndex = 0;
let atomAngle = 0;
let popupTab = 'overview';

function setupFilters(){
  [...new Set(ELEMENTS.map(e => e.category))].sort().forEach(cat => {
    const opt = document.createElement('option');
    opt.value = cat;
    opt.textContent = cat;
    categoryFilter.appendChild(opt);
    flashFilter.appendChild(opt.cloneNode(true));
  });
  for(let g=1; g<=18; g++) {
    const opt = document.createElement('option');
    opt.value = String(g);
    opt.textContent = `Group ${g}`;
    groupFilter.appendChild(opt);
    groupStudySelect.appendChild(opt.cloneNode(true));
  }
  groupStudySelect.value = '1';

  const compareOptions = ELEMENTS.map(e => `<option value="${e.number}">${e.symbol} - ${e.name}</option>`).join('');
  compareA.innerHTML = compareOptions;
  compareB.innerHTML = compareOptions;
  compareA.value = '11';
  compareB.value = '17';
}

function modeColor(el){
  if(modeFilter.value === 'block') return COLORS.block[el.block] || '#94a3b8';
  if(modeFilter.value === 'valency') return COLORS.valency[el.oxidation] || '#94a3b8';
  if(modeFilter.value === 'reactivity') return COLORS.reactivity[el.reactivity] || '#94a3b8';
  if(modeFilter.value === 'group') return `hsl(${(el.group * 20)%360} 72% 58%)`;
  return COLORS.category[el.category] || '#94a3b8';
}

function renderLegend(){
  legend.innerHTML = '';
  let items = [];
  if(modeFilter.value === 'block') items = Object.entries(COLORS.block).map(([k,v]) => [`${k}-block`, v]);
  else if(modeFilter.value === 'valency') items = Object.entries(COLORS.valency).map(([k,v]) => [k, v]);
  else if(modeFilter.value === 'reactivity') items = Object.entries(COLORS.reactivity).map(([k,v]) => [k, v]);
  else if(modeFilter.value === 'group') items = Array.from({length:18}, (_,i) => [`Group ${i+1}`, `hsl(${((i+1)*20)%360} 72% 58%)`]);
  else items = Object.entries(COLORS.category);

  items.forEach(([label, color]) => {
    const div = document.createElement('div');
    div.className = 'legend-item';
    div.innerHTML = `<span class="swatch" style="background:${color}"></span><span>${label}</span>`;
    legend.appendChild(div);
  });
}

function matchesQuick(el){
  if(!currentQuick) return true;
  if(currentQuick === 'metal') return !['Nonmetal','Halogen','Noble Gas','Metalloid'].includes(el.category);
  if(currentQuick === 'nonmetal') return ['Nonmetal','Halogen','Noble Gas'].includes(el.category);
  if(currentQuick === 'metalloid') return el.category === 'Metalloid';
  if(currentQuick === 'halogen') return el.category === 'Halogen';
  if(currentQuick === 'noble') return el.category === 'Noble Gas';
  return true;
}

function visible(el){
  const q = searchInput.value.trim().toLowerCase();
  const catOk = categoryFilter.value === 'all' || el.category === categoryFilter.value;
  const groupOk = groupFilter.value === 'all' || String(el.group) === groupFilter.value;
  const textOk = !q || el.name.toLowerCase().includes(q) || el.symbol.toLowerCase().includes(q) || String(el.number).includes(q);
  return catOk && groupOk && matchesQuick(el) && textOk;
}

function renderTable(){
  table.innerHTML = '';
  for(let y=1; y<=10; y++) {
    for(let x=1; x<=18; x++) {
      const el = ELEMENTS.find(item => item.x === x && item.y === y);
      if(!el){
        const blank = document.createElement('div');
        blank.className = 'blank';
        table.appendChild(blank);
        continue;
      }
      const div = document.createElement('div');
      div.className = `element ${visible(el) ? '' : 'dim'} ${currentElement.number === el.number ? 'active' : ''} ${el.category==='Lanthanide'?'lanth':''} ${el.category==='Actinide'?'act':''}`;
      div.style.background = modeColor(el);
      div.innerHTML = `
        <div class="num">${el.number}</div>
        <div class="symbol">${el.symbol}</div>
        <div class="name">${el.name}</div>
        <div class="meta">${el.mass}</div>
      `;
      div.onclick = () => {
        currentElement = el;
        renderTable();
        renderSummary();
        openPopup(el);
      };
      table.appendChild(div);
    }
  }
}

function renderSummary(){
  selectedSummary.innerHTML = `
    <strong>${currentElement.name} (${currentElement.symbol})</strong><br>
    Atomic number: ${currentElement.number}<br>
    Atomic mass: ${currentElement.mass}<br>
    Group / Period: ${currentElement.group} / ${currentElement.period}<br>
    Category: ${currentElement.category}<br>
    Electron configuration: ${currentElement.electronConfig}<br>
    Oxidation states: ${currentElement.oxidation}<br>
    Reactivity: ${currentElement.reactivity}
  `;
}

function orbitalRows(z){
  const order = [
    ['1s',1],['2s',1],['2p',3],['3s',1],['3p',3],['4s',1],['3d',5],['4p',3],['5s',1],['4d',5],['5p',3],['6s',1],['4f',7],['5d',5],['6p',3],['7s',1],['5f',7],['6d',5],['7p',3]
  ];
  let left = z;
  return order.map(([label, boxes]) => {
    const cap = boxes * 2;
    const fill = Math.max(0, Math.min(cap, left));
    left -= fill;
    return {label, boxes, fill};
  }).filter(r => r.fill > 0 || ['1s','2s','2p','3s'].includes(r.label));
}

function orbitalHTML(z){
  return `<div class="orbital-boxes">${orbitalRows(z).map(row => {
    let left = row.fill;
    const boxes = [];
    for(let i=0;i<row.boxes;i++) {
      let txt = '';
      if(left > 0) {
        txt = '↑';
        left--;
        if(left > row.boxes - i - 1) {
          txt = '↑↓';
          left--;
        }
      }
      boxes.push(`<div class="orbital-box">${txt}</div>`);
    }
    return `<div class="orbital-row"><strong>${row.label}</strong><div class="boxset">${boxes.join('')}</div></div>`;
  }).join('')}</div>`;
}

function popupTabsHTML(active){
  const tabs = [
    ['overview','Overview'],
    ['uses','Uses'],
    ['discovery','Discovery'],
    ['orbitals','Orbitals'],
    ['trends','Trends']
  ];
  return `<div class="popup-tab-row">${tabs.map(([id,label]) => `<button class="popup-tab ${active===id?'active':''}" data-tab="${id}">${label}</button>`).join('')}</div>`;
}

function popupPanel(el, tab){
  if(tab === 'uses'){
    return `
      <div class="popup-grid">
        <div class="popup-chip"><strong>Main uses</strong>${el.uses.join(', ')}</div>
        <div class="popup-chip"><strong>Common compounds</strong>${el.compounds.join(', ')}</div>
        <div class="popup-chip"><strong>State / Block</strong>${el.state} · ${el.block}-block</div>
        <div class="popup-chip"><strong>Oxidation states</strong>${el.oxidation}</div>
      </div>
    `;
  }
  if(tab === 'discovery'){
    return `
      <div class="popup-grid">
        <div class="popup-chip"><strong>Discovered / isolated by</strong>${el.discoveryBy}</div>
        <div class="popup-chip"><strong>Discovery year</strong>${el.discoveryYear}</div>
        <div class="popup-chip"><strong>Category</strong>${el.category}</div>
        <div class="popup-chip"><strong>Historical note</strong>${el.name} became important in chemistry because of its role in ${el.uses[0]}.</div>
      </div>
    `;
  }
  if(tab === 'orbitals'){
    return `
      <div class="popup-chip orbital-wrap">
        <strong>Electron configuration</strong>${el.electronConfig}
        ${orbitalHTML(el.number)}
      </div>
    `;
  }
  if(tab === 'trends'){
    return `
      <div class="popup-grid">
        <div class="popup-chip"><strong>Approx. atomic radius trend value</strong>${el.trendRadius}</div>
        <div class="popup-chip"><strong>Approx. electronegativity trend value</strong>${el.trendEN}</div>
        <div class="popup-chip"><strong>Group behavior</strong>Elements in group ${el.group} often show related outer-shell behavior.</div>
        <div class="popup-chip"><strong>Reactivity note</strong>${el.reactivity}</div>
      </div>
    `;
  }
  return `
    <div class="popup-grid">
      <div class="popup-chip"><strong>Atomic mass</strong>${el.mass}</div>
      <div class="popup-chip"><strong>Electron configuration</strong>${el.electronConfig}</div>
      <div class="popup-chip"><strong>Shell distribution</strong>${el.shellText}</div>
      <div class="popup-chip"><strong>Reaction tendency</strong>${el.reactivity}</div>
      <div class="popup-chip"><strong>Main uses</strong>${el.uses.join(', ')}</div>
      <div class="popup-chip"><strong>Common compounds</strong>${el.compounds.join(', ')}</div>
      <div class="popup-chip"><strong>Discovery</strong>${el.discoveryBy} (${el.discoveryYear})</div>
      <div class="popup-chip"><strong>Oxidation states</strong>${el.oxidation}</div>
    </div>
  `;
}

function openPopup(el){
  popup.classList.remove('hidden');
  popupBody.innerHTML = `
    <div class="popup-title">
      <div class="popup-badge" style="background:${modeColor(el)}">${el.symbol}</div>
      <div>
        <h2 style="margin:0">${el.name}</h2>
        <div class="info-block">Atomic number ${el.number} · Atomic mass ${el.mass} · ${el.category}</div>
      </div>
    </div>
    ${popupTabsHTML(popupTab)}
    <div id="popupPanel">${popupPanel(el, popupTab)}</div>
  `;
  $$('.popup-tab').forEach(btn => btn.onclick = () => {
    popupTab = btn.dataset.tab;
    openPopup(el);
  });
}

closePopup.onclick = () => popup.classList.add('hidden');
popup.onclick = e => { if(e.target === popup) popup.classList.add('hidden'); };

tabs.forEach(tab => tab.onclick = () => {
  tabs.forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  views.forEach(v => v.classList.remove('active-view'));
  document.getElementById(tab.dataset.view).classList.add('active-view');
});

quickBtns.forEach(btn => btn.onclick = () => {
  if(currentQuick === btn.dataset.type){
    currentQuick = '';
    btn.classList.remove('active');
  } else {
    quickBtns.forEach(b => b.classList.remove('active'));
    currentQuick = btn.dataset.type;
    btn.classList.add('active');
  }
  renderTable();
});

[searchInput, categoryFilter, modeFilter, groupFilter].forEach(el => el.addEventListener('input', () => {
  renderLegend();
  renderTable();
  buildRevisionSheet();
}));

resetBtn.onclick = () => {
  searchInput.value = '';
  categoryFilter.value = 'all';
  groupFilter.value = 'all';
  modeFilter.value = 'category';
  currentQuick = '';
  quickBtns.forEach(b => b.classList.remove('active'));
  renderLegend();
  renderTable();
  buildRevisionSheet();
};

function buildFlashPool(){
  flashPool = flashFilter.value === 'all' ? [...ELEMENTS] : ELEMENTS.filter(e => e.category === flashFilter.value);
  flashIndex = 0;
  renderFlash();
}
flashFilter.onchange = buildFlashPool;

function renderFlash(){
  const el = flashPool[flashIndex] || ELEMENTS[0];
  flashCounter.textContent = `${flashIndex + 1} / ${flashPool.length}`;
  flashFront.innerHTML = `
    <div>
      <div class="big-symbol">${el.symbol}</div>
      <div class="big-name">${el.name}</div>
      <div class="info-block">Tap to flip</div>
    </div>
  `;
  flashBack.innerHTML = `
    <div>
      <strong>${el.name}</strong><br>
      Group / Period: ${el.group} / ${el.period}<br>
      Category: ${el.category}<br>
      Oxidation: ${el.oxidation}<br>
      Uses: ${el.uses.join(', ')}<br>
      Compounds: ${el.compounds.join(', ')}
    </div>
  `;
  flashcard.classList.remove('flipped');
}
flashcard.onclick = () => flashcard.classList.toggle('flipped');
flipFlash.onclick = () => flashcard.classList.toggle('flipped');
prevFlash.onclick = () => { flashIndex = (flashIndex - 1 + flashPool.length) % flashPool.length; renderFlash(); };
nextFlash.onclick = () => { flashIndex = (flashIndex + 1) % flashPool.length; renderFlash(); };

function renderGroupStudy(){
  const g = Number(groupStudySelect.value || 1);
  const items = ELEMENTS.filter(e => e.group === g);
  groupStudyInfo.innerHTML = `
    <strong>Group ${g}</strong><br>
    Elements in a group tend to have similar valence-shell behavior and related chemistry.
  `;
  groupStudyElements.innerHTML = items.map(el => `
    <div class="mini-card">
      <strong>${el.symbol}</strong><br>
      ${el.name}<br>
      <span class="info-block">Oxidation: ${el.oxidation}</span>
    </div>
  `).join('');
  drawTrend();
}
groupStudySelect.onchange = renderGroupStudy;
trendMetric.onchange = drawTrend;
trendScope.onchange = drawTrend;

function drawTrend(){
  const metric = trendMetric.value;
  const scope = trendScope.value;
  const ctx = trendCtx;
  const w = trendCanvas.width;
  const h = trendCanvas.height;
  ctx.clearRect(0,0,w,h);
  ctx.fillStyle = '#0a1020';
  ctx.fillRect(0,0,w,h);

  let pts = [];
  if(scope === 'group') {
    const g = Number(groupStudySelect.value || 1);
    pts = ELEMENTS.filter(e => e.group === g).sort((a,b) => a.period - b.period);
    trendNotes.innerHTML = `Selected <strong>group ${g}</strong>. Down a group, radius often rises while electronegativity tends to fall.`;
  } else {
    const p = currentElement.period;
    pts = ELEMENTS.filter(e => e.period === p && e.y < 9).sort((a,b) => a.group - b.group);
    trendNotes.innerHTML = `Selected <strong>period ${p}</strong>. Across a period, radius often falls while electronegativity tends to rise.`;
  }
  if(!pts.length) return;

  const values = pts.map(p => Number(p[metric]));
  const max = Math.max(...values), min = Math.min(...values);
  const left = 55, right = w - 20, top = 25, bottom = h - 45;

  ctx.strokeStyle = 'rgba(255,255,255,.25)';
  ctx.beginPath();
  ctx.moveTo(left, top); ctx.lineTo(left, bottom); ctx.lineTo(right, bottom); ctx.stroke();

  ctx.strokeStyle = '#7dd3fc';
  ctx.lineWidth = 3;
  ctx.beginPath();
  pts.forEach((p, i) => {
    const x = left + (i / Math.max(pts.length - 1, 1)) * (right - left);
    const y = bottom - ((Number(p[metric]) - min) / Math.max(max - min, 0.001)) * (bottom - top);
    if(i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  });
  ctx.stroke();

  ctx.font = '12px Arial';
  pts.forEach((p, i) => {
    const x = left + (i / Math.max(pts.length - 1, 1)) * (right - left);
    const y = bottom - ((Number(p[metric]) - min) / Math.max(max - min, 0.001)) * (bottom - top);
    ctx.fillStyle = '#ffd166';
    ctx.beginPath(); ctx.arc(x, y, 4, 0, Math.PI*2); ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.fillText(p.symbol, x - 7, bottom + 16);
  });
}

function renderCompare(){
  const a = ELEMENTS.find(e => e.number === Number(compareA.value)) || ELEMENTS[10];
  const b = ELEMENTS.find(e => e.number === Number(compareB.value)) || ELEMENTS[16];
  compareSummary.innerHTML = `<strong>${a.name}</strong> vs <strong>${b.name}</strong>`;
  compareGrid.innerHTML = `
    <div class="compare-item"><span>Atomic number</span><strong>${a.number}</strong><strong>${b.number}</strong></div>
    <div class="compare-item"><span>Atomic mass</span><strong>${a.mass}</strong><strong>${b.mass}</strong></div>
    <div class="compare-item"><span>Category</span><strong>${a.category}</strong><strong>${b.category}</strong></div>
    <div class="compare-item"><span>Group / Period</span><strong>${a.group} / ${a.period}</strong><strong>${b.group} / ${b.period}</strong></div>
    <div class="compare-item"><span>Block</span><strong>${a.block}-block</strong><strong>${b.block}-block</strong></div>
    <div class="compare-item"><span>Oxidation</span><strong>${a.oxidation}</strong><strong>${b.oxidation}</strong></div>
    <div class="compare-item"><span>Reactivity</span><strong>${a.reactivity}</strong><strong>${b.reactivity}</strong></div>
    <div class="compare-item"><span>Electronegativity trend</span><strong>${a.trendEN}</strong><strong>${b.trendEN}</strong></div>
  `;
}
compareA.onchange = renderCompare;
compareB.onchange = renderCompare;

function buildRevisionSheet(){
  const shown = ELEMENTS.filter(e => visible(e)).slice(0, 28);
  revisionSheet.innerHTML = shown.map(el => `
    <div class="revision-card">
      <h3 style="margin:0 0 8px">${el.symbol} · ${el.name}</h3>
      <div>Atomic number: ${el.number}</div>
      <div>Mass: ${el.mass}</div>
      <div>Group / Period: ${el.group} / ${el.period}</div>
      <div>Category: ${el.category}</div>
      <div>Oxidation: ${el.oxidation}</div>
      <div>Config: ${el.electronConfig}</div>
      <div>Uses: ${el.uses.join(', ')}</div>
      <div>Compounds: ${el.compounds.join(', ')}</div>
    </div>
  `).join('');
}
buildRevision.onclick = buildRevisionSheet;
printSheet.onclick = () => window.print();

function drawAtom(){
  const ctx = atomCtx;
  const w = atomCanvas.width, h = atomCanvas.height;
  ctx.clearRect(0,0,w,h);
  const cx = w / 2, cy = h / 2;
  ctx.beginPath();
  ctx.fillStyle = '#ffd166';
  ctx.arc(cx, cy, 15, 0, Math.PI * 2);
  ctx.fill();

  currentElement.shells.slice(0,4).forEach((count, idx) => {
    const r = 42 + idx * 28;
    const tilt = idx * 0.45 + atomAngle * 0.2;
    ctx.strokeStyle = 'rgba(255,255,255,.18)';
    ctx.beginPath();
    ctx.ellipse(cx, cy, r, r * 0.55, tilt, 0, Math.PI*2);
    ctx.stroke();

    const show = Math.min(count, 10);
    for(let i=0;i<show;i++) {
      const a = ((Math.PI * 2) / show) * i + atomAngle * (idx % 2 ? -1 : 1) * (0.48 + idx * 0.14);
      const px = cx + Math.cos(a) * Math.cos(tilt) * r;
      const py = cy + Math.sin(a) * r * 0.55;
      const depth = (Math.sin(a) + 1) / 2;
      const size = 2.4 + depth * 3.2;
      ctx.fillStyle = `rgba(125,211,252,${0.45 + depth * 0.55})`;
      ctx.beginPath();
      ctx.arc(px, py, size, 0, Math.PI * 2);
      ctx.fill();
    }
  });

  atomAngle += 0.02;
  requestAnimationFrame(drawAtom);
}

function init(){
  setupFilters();
  renderLegend();
  renderTable();
  renderSummary();
  buildFlashPool();
  renderGroupStudy();
  renderCompare();
  buildRevisionSheet();
  drawAtom();
}
init();
