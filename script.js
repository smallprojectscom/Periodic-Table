
const ELEMENTS = [{"number":1,"symbol":"H","name":"Hydrogen","group":1,"period":1,"category":"Nonmetal","state":"Gas","block":"s","x":1,"y":1,"shells":[1],"shellText":"1","valency":"variable","reactivity":"moderate to high","discovery":"Henry Cavendish","uses":["ammonia production","rocket fuel research"],"compounds":["H₂O","NH₃","HCl"],"trendRadius":1.085,"trendEN":0.83,"fact":"Hydrogen is a nonmetal in period 1 and group 1."},{"number":2,"symbol":"He","name":"Helium","group":18,"period":1,"category":"Noble Gas","state":"Gas","block":"s","x":18,"y":1,"shells":[2],"shellText":"2","valency":"0","reactivity":"very low","discovery":"Pierre Janssen and Norman Lockyer","uses":["cryogenic cooling","balloons"],"compounds":["He compounds","He oxides"],"trendRadius":0.66,"trendEN":2.54,"fact":"Helium is a noble gas in period 1 and group 18."},{"number":3,"symbol":"Li","name":"Lithium","group":1,"period":2,"category":"Alkali Metal","state":"Solid","block":"s","x":1,"y":2,"shells":[2,1],"shellText":"2, 1","valency":"+1","reactivity":"very high","discovery":"Johan August Arfwedson","uses":["batteries","light alloys"],"compounds":["Li compounds","Li oxides"],"trendRadius":1.245,"trendEN":0.5,"fact":"Lithium is a alkali metal in period 2 and group 1."},{"number":4,"symbol":"Be","name":"Beryllium","group":2,"period":2,"category":"Alkaline Earth Metal","state":"Solid","block":"s","x":2,"y":2,"shells":[2,2],"shellText":"2, 2","valency":"+2","reactivity":"high","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["beryllium chemistry","materials science"],"compounds":["Be compounds","Be oxides"],"trendRadius":1.22,"trendEN":0.56,"fact":"Beryllium is a alkaline earth metal in period 2 and group 2."},{"number":5,"symbol":"B","name":"Boron","group":13,"period":2,"category":"Metalloid","state":"Solid","block":"p","x":13,"y":2,"shells":[2,3],"shellText":"2, 3","valency":"+3","reactivity":"moderate","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["borosilicate glass","detergents"],"compounds":["B compounds","B oxides"],"trendRadius":0.945,"trendEN":2.39,"fact":"Boron is a metalloid in period 2 and group 13."},{"number":6,"symbol":"C","name":"Carbon","group":14,"period":2,"category":"Nonmetal","state":"Solid","block":"p","x":14,"y":2,"shells":[2,4],"shellText":"2, 4","valency":"±4","reactivity":"moderate to high","discovery":"Known since antiquity","uses":["organic compounds","electrodes"],"compounds":["CO₂","CH₄","CaCO₃"],"trendRadius":0.92,"trendEN":2.52,"fact":"Carbon is a nonmetal in period 2 and group 14."},{"number":7,"symbol":"N","name":"Nitrogen","group":15,"period":2,"category":"Nonmetal","state":"Gas","block":"p","x":15,"y":2,"shells":[2,5],"shellText":"2, 5","valency":"-3 / +3 / +5","reactivity":"moderate to high","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["nitrogen chemistry","materials science"],"compounds":["N compounds","N oxides"],"trendRadius":0.895,"trendEN":2.65,"fact":"Nitrogen is a nonmetal in period 2 and group 15."},{"number":8,"symbol":"O","name":"Oxygen","group":16,"period":2,"category":"Nonmetal","state":"Gas","block":"p","x":16,"y":2,"shells":[2,6],"shellText":"2, 6","valency":"-2 / +4 / +6","reactivity":"moderate to high","discovery":"Carl Wilhelm Scheele and Joseph Priestley","uses":["medical oxygen","steelmaking"],"compounds":["H₂O","CO₂","Fe₂O₃"],"trendRadius":0.87,"trendEN":2.78,"fact":"Oxygen is a nonmetal in period 2 and group 16."},{"number":9,"symbol":"F","name":"Fluorine","group":17,"period":2,"category":"Halogen","state":"Gas","block":"p","x":17,"y":2,"shells":[2,7],"shellText":"2, 7","valency":"-1 / 1","reactivity":"very high","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["fluorine chemistry","materials science"],"compounds":["F compounds","F oxides"],"trendRadius":0.845,"trendEN":3.41,"fact":"Fluorine is a halogen in period 2 and group 17."},{"number":10,"symbol":"Ne","name":"Neon","group":18,"period":2,"category":"Noble Gas","state":"Gas","block":"p","x":18,"y":2,"shells":[2,8],"shellText":"2, 8","valency":"0","reactivity":"very low","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["neon chemistry","materials science"],"compounds":["Ne compounds","Ne oxides"],"trendRadius":0.82,"trendEN":2.54,"fact":"Neon is a noble gas in period 2 and group 18."},{"number":11,"symbol":"Na","name":"Sodium","group":1,"period":3,"category":"Alkali Metal","state":"Solid","block":"s","x":1,"y":3,"shells":[2,8,1],"shellText":"2, 8, 1","valency":"+1","reactivity":"very high","discovery":"Humphry Davy","uses":["sodium vapor lamps","chemical synthesis"],"compounds":["NaCl","NaOH","Na₂CO₃"],"trendRadius":1.405,"trendEN":0.5,"fact":"Sodium is a alkali metal in period 3 and group 1."},{"number":12,"symbol":"Mg","name":"Magnesium","group":2,"period":3,"category":"Alkaline Earth Metal","state":"Solid","block":"s","x":2,"y":3,"shells":[2,8,2],"shellText":"2, 8, 2","valency":"+2","reactivity":"high","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["alloys","fireworks"],"compounds":["MgO","MgSO₄","MgCl₂"],"trendRadius":1.38,"trendEN":0.56,"fact":"Magnesium is a alkaline earth metal in period 3 and group 2."},{"number":13,"symbol":"Al","name":"Aluminium","group":13,"period":3,"category":"Post-transition Metal","state":"Solid","block":"p","x":13,"y":3,"shells":[2,8,3],"shellText":"2, 8, 3","valency":"+3","reactivity":"moderate","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["transport","packaging"],"compounds":["Al₂O₃","AlCl₃"],"trendRadius":1.105,"trendEN":2.39,"fact":"Aluminium is a post-transition metal in period 3 and group 13."},{"number":14,"symbol":"Si","name":"Silicon","group":14,"period":3,"category":"Metalloid","state":"Solid","block":"p","x":14,"y":3,"shells":[2,8,4],"shellText":"2, 8, 4","valency":"±4","reactivity":"moderate","discovery":"Jöns Jacob Berzelius","uses":["microchips","solar cells"],"compounds":["SiO₂","SiC"],"trendRadius":1.08,"trendEN":2.52,"fact":"Silicon is a metalloid in period 3 and group 14."},{"number":15,"symbol":"P","name":"Phosphorus","group":15,"period":3,"category":"Nonmetal","state":"Solid","block":"p","x":15,"y":3,"shells":[2,8,5],"shellText":"2, 8, 5","valency":"-3 / +3 / +5","reactivity":"moderate to high","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["fertilizers","matches"],"compounds":["P₄O₁₀","H₃PO₄"],"trendRadius":1.055,"trendEN":2.65,"fact":"Phosphorus is a nonmetal in period 3 and group 15."},{"number":16,"symbol":"S","name":"Sulfur","group":16,"period":3,"category":"Nonmetal","state":"Solid","block":"p","x":16,"y":3,"shells":[2,8,6],"shellText":"2, 8, 6","valency":"-2 / +4 / +6","reactivity":"moderate to high","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["sulfuric acid","vulcanization"],"compounds":["SO₂","H₂SO₄"],"trendRadius":1.03,"trendEN":2.78,"fact":"Sulfur is a nonmetal in period 3 and group 16."},{"number":17,"symbol":"Cl","name":"Chlorine","group":17,"period":3,"category":"Halogen","state":"Gas","block":"p","x":17,"y":3,"shells":[2,8,7],"shellText":"2, 8, 7","valency":"-1 / 1","reactivity":"very high","discovery":"Carl Wilhelm Scheele","uses":["water treatment","PVC"],"compounds":["NaCl","HCl","Ca(OCl)₂"],"trendRadius":1.005,"trendEN":3.41,"fact":"Chlorine is a halogen in period 3 and group 17."},{"number":18,"symbol":"Ar","name":"Argon","group":18,"period":3,"category":"Noble Gas","state":"Gas","block":"p","x":18,"y":3,"shells":[2,8,8],"shellText":"2, 8, 8","valency":"0","reactivity":"very low","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["argon chemistry","materials science"],"compounds":["Ar compounds","Ar oxides"],"trendRadius":0.98,"trendEN":2.54,"fact":"Argon is a noble gas in period 3 and group 18."},{"number":19,"symbol":"K","name":"Potassium","group":1,"period":4,"category":"Alkali Metal","state":"Solid","block":"s","x":1,"y":4,"shells":[2,8,9],"shellText":"2, 8, 9","valency":"+1","reactivity":"very high","discovery":"Humphry Davy","uses":["potassium chemistry","materials science"],"compounds":["K compounds","K oxides"],"trendRadius":1.565,"trendEN":0.5,"fact":"Potassium is a alkali metal in period 4 and group 1."},{"number":20,"symbol":"Ca","name":"Calcium","group":2,"period":4,"category":"Alkaline Earth Metal","state":"Solid","block":"s","x":2,"y":4,"shells":[2,8,10],"shellText":"2, 8, 10","valency":"+2","reactivity":"high","discovery":"Humphry Davy","uses":["calcium chemistry","materials science"],"compounds":["Ca compounds","Ca oxides"],"trendRadius":1.54,"trendEN":0.56,"fact":"Calcium is a alkaline earth metal in period 4 and group 2."},{"number":21,"symbol":"Sc","name":"Scandium","group":3,"period":4,"category":"Transition Metal","state":"Solid","block":"d","x":3,"y":4,"shells":[2,8,11],"shellText":"2, 8, 11","valency":"variable","reactivity":"variable","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["scandium chemistry","materials science"],"compounds":["Sc compounds","Sc oxides"],"trendRadius":1.515,"trendEN":1.09,"fact":"Scandium is a transition metal in period 4 and group 3."},{"number":22,"symbol":"Ti","name":"Titanium","group":4,"period":4,"category":"Transition Metal","state":"Solid","block":"d","x":4,"y":4,"shells":[2,8,12],"shellText":"2, 8, 12","valency":"variable","reactivity":"variable","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["titanium chemistry","materials science"],"compounds":["Ti compounds","Ti oxides"],"trendRadius":1.49,"trendEN":1.22,"fact":"Titanium is a transition metal in period 4 and group 4."},{"number":23,"symbol":"V","name":"Vanadium","group":5,"period":4,"category":"Transition Metal","state":"Solid","block":"d","x":5,"y":4,"shells":[2,8,13],"shellText":"2, 8, 13","valency":"variable","reactivity":"variable","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["vanadium chemistry","materials science"],"compounds":["V compounds","V oxides"],"trendRadius":1.465,"trendEN":1.35,"fact":"Vanadium is a transition metal in period 4 and group 5."},{"number":24,"symbol":"Cr","name":"Chromium","group":6,"period":4,"category":"Transition Metal","state":"Solid","block":"d","x":6,"y":4,"shells":[2,8,14],"shellText":"2, 8, 14","valency":"variable","reactivity":"variable","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["chromium chemistry","materials science"],"compounds":["Cr compounds","Cr oxides"],"trendRadius":1.44,"trendEN":1.48,"fact":"Chromium is a transition metal in period 4 and group 6."},{"number":25,"symbol":"Mn","name":"Manganese","group":7,"period":4,"category":"Transition Metal","state":"Solid","block":"d","x":7,"y":4,"shells":[2,8,15],"shellText":"2, 8, 15","valency":"variable","reactivity":"variable","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["manganese chemistry","materials science"],"compounds":["Mn compounds","Mn oxides"],"trendRadius":1.415,"trendEN":1.61,"fact":"Manganese is a transition metal in period 4 and group 7."},{"number":26,"symbol":"Fe","name":"Iron","group":8,"period":4,"category":"Transition Metal","state":"Solid","block":"d","x":8,"y":4,"shells":[2,8,16],"shellText":"2, 8, 16","valency":"variable","reactivity":"variable","discovery":"Known since antiquity","uses":["steel","machinery"],"compounds":["Fe₂O₃","FeSO₄"],"trendRadius":1.39,"trendEN":1.74,"fact":"Iron is a transition metal in period 4 and group 8."},{"number":27,"symbol":"Co","name":"Cobalt","group":9,"period":4,"category":"Transition Metal","state":"Solid","block":"d","x":9,"y":4,"shells":[2,8,17],"shellText":"2, 8, 17","valency":"variable","reactivity":"variable","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["cobalt chemistry","materials science"],"compounds":["Co compounds","Co oxides"],"trendRadius":1.365,"trendEN":1.87,"fact":"Cobalt is a transition metal in period 4 and group 9."},{"number":28,"symbol":"Ni","name":"Nickel","group":10,"period":4,"category":"Transition Metal","state":"Solid","block":"d","x":10,"y":4,"shells":[2,8,18],"shellText":"2, 8, 18","valency":"variable","reactivity":"variable","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["nickel chemistry","materials science"],"compounds":["Ni compounds","Ni oxides"],"trendRadius":1.34,"trendEN":2.0,"fact":"Nickel is a transition metal in period 4 and group 10."},{"number":29,"symbol":"Cu","name":"Copper","group":11,"period":4,"category":"Transition Metal","state":"Solid","block":"d","x":11,"y":4,"shells":[2,8,18,1],"shellText":"2, 8, 18, 1","valency":"variable","reactivity":"variable","discovery":"Known since antiquity","uses":["electrical wiring","alloys"],"compounds":["CuSO₄","CuO"],"trendRadius":1.315,"trendEN":2.13,"fact":"Copper is a transition metal in period 4 and group 11."},{"number":30,"symbol":"Zn","name":"Zinc","group":12,"period":4,"category":"Transition Metal","state":"Solid","block":"d","x":12,"y":4,"shells":[2,8,18,2],"shellText":"2, 8, 18, 2","valency":"variable","reactivity":"variable","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["galvanizing","batteries"],"compounds":["ZnO","ZnSO₄"],"trendRadius":1.29,"trendEN":2.26,"fact":"Zinc is a transition metal in period 4 and group 12."},{"number":31,"symbol":"Ga","name":"Gallium","group":13,"period":4,"category":"Post-transition Metal","state":"Solid","block":"p","x":13,"y":4,"shells":[2,8,18,3],"shellText":"2, 8, 18, 3","valency":"+3","reactivity":"moderate","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["gallium chemistry","materials science"],"compounds":["Ga compounds","Ga oxides"],"trendRadius":1.265,"trendEN":2.39,"fact":"Gallium is a post-transition metal in period 4 and group 13."},{"number":32,"symbol":"Ge","name":"Germanium","group":14,"period":4,"category":"Metalloid","state":"Solid","block":"p","x":14,"y":4,"shells":[2,8,18,4],"shellText":"2, 8, 18, 4","valency":"±4","reactivity":"moderate","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["germanium chemistry","materials science"],"compounds":["Ge compounds","Ge oxides"],"trendRadius":1.24,"trendEN":2.52,"fact":"Germanium is a metalloid in period 4 and group 14."},{"number":33,"symbol":"As","name":"Arsenic","group":15,"period":4,"category":"Metalloid","state":"Solid","block":"p","x":15,"y":4,"shells":[2,8,18,5],"shellText":"2, 8, 18, 5","valency":"-3 / +3 / +5","reactivity":"moderate","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["arsenic chemistry","materials science"],"compounds":["As compounds","As oxides"],"trendRadius":1.215,"trendEN":2.65,"fact":"Arsenic is a metalloid in period 4 and group 15."},{"number":34,"symbol":"Se","name":"Selenium","group":16,"period":4,"category":"Nonmetal","state":"Solid","block":"p","x":16,"y":4,"shells":[2,8,18,6],"shellText":"2, 8, 18, 6","valency":"-2 / +4 / +6","reactivity":"moderate to high","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["selenium chemistry","materials science"],"compounds":["Se compounds","Se oxides"],"trendRadius":1.19,"trendEN":2.78,"fact":"Selenium is a nonmetal in period 4 and group 16."},{"number":35,"symbol":"Br","name":"Bromine","group":17,"period":4,"category":"Halogen","state":"Liquid","block":"p","x":17,"y":4,"shells":[2,8,18,7],"shellText":"2, 8, 18, 7","valency":"-1 / 1","reactivity":"very high","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["bromine chemistry","materials science"],"compounds":["Br compounds","Br oxides"],"trendRadius":1.165,"trendEN":3.41,"fact":"Bromine is a halogen in period 4 and group 17."},{"number":36,"symbol":"Kr","name":"Krypton","group":18,"period":4,"category":"Noble Gas","state":"Gas","block":"p","x":18,"y":4,"shells":[2,8,18,8],"shellText":"2, 8, 18, 8","valency":"0","reactivity":"very low","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["krypton chemistry","materials science"],"compounds":["Kr compounds","Kr oxides"],"trendRadius":1.14,"trendEN":2.54,"fact":"Krypton is a noble gas in period 4 and group 18."},{"number":37,"symbol":"Rb","name":"Rubidium","group":1,"period":5,"category":"Alkali Metal","state":"Solid","block":"s","x":1,"y":5,"shells":[2,8,18,9],"shellText":"2, 8, 18, 9","valency":"+1","reactivity":"very high","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["rubidium chemistry","materials science"],"compounds":["Rb compounds","Rb oxides"],"trendRadius":1.725,"trendEN":0.5,"fact":"Rubidium is a alkali metal in period 5 and group 1."},{"number":38,"symbol":"Sr","name":"Strontium","group":2,"period":5,"category":"Alkaline Earth Metal","state":"Solid","block":"s","x":2,"y":5,"shells":[2,8,18,10],"shellText":"2, 8, 18, 10","valency":"+2","reactivity":"high","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["strontium chemistry","materials science"],"compounds":["Sr compounds","Sr oxides"],"trendRadius":1.7,"trendEN":0.56,"fact":"Strontium is a alkaline earth metal in period 5 and group 2."},{"number":39,"symbol":"Y","name":"Yttrium","group":3,"period":5,"category":"Transition Metal","state":"Solid","block":"d","x":3,"y":5,"shells":[2,8,18,11],"shellText":"2, 8, 18, 11","valency":"variable","reactivity":"variable","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["yttrium chemistry","materials science"],"compounds":["Y compounds","Y oxides"],"trendRadius":1.675,"trendEN":1.09,"fact":"Yttrium is a transition metal in period 5 and group 3."},{"number":40,"symbol":"Zr","name":"Zirconium","group":4,"period":5,"category":"Transition Metal","state":"Solid","block":"d","x":4,"y":5,"shells":[2,8,18,12],"shellText":"2, 8, 18, 12","valency":"variable","reactivity":"variable","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["zirconium chemistry","materials science"],"compounds":["Zr compounds","Zr oxides"],"trendRadius":1.65,"trendEN":1.22,"fact":"Zirconium is a transition metal in period 5 and group 4."},{"number":41,"symbol":"Nb","name":"Niobium","group":5,"period":5,"category":"Transition Metal","state":"Solid","block":"d","x":5,"y":5,"shells":[2,8,18,13],"shellText":"2, 8, 18, 13","valency":"variable","reactivity":"variable","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["niobium chemistry","materials science"],"compounds":["Nb compounds","Nb oxides"],"trendRadius":1.625,"trendEN":1.35,"fact":"Niobium is a transition metal in period 5 and group 5."},{"number":42,"symbol":"Mo","name":"Molybdenum","group":6,"period":5,"category":"Transition Metal","state":"Solid","block":"d","x":6,"y":5,"shells":[2,8,18,14],"shellText":"2, 8, 18, 14","valency":"variable","reactivity":"variable","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["molybdenum chemistry","materials science"],"compounds":["Mo compounds","Mo oxides"],"trendRadius":1.6,"trendEN":1.48,"fact":"Molybdenum is a transition metal in period 5 and group 6."},{"number":43,"symbol":"Tc","name":"Technetium","group":7,"period":5,"category":"Transition Metal","state":"Solid","block":"d","x":7,"y":5,"shells":[2,8,18,15],"shellText":"2, 8, 18, 15","valency":"variable","reactivity":"variable","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["technetium chemistry","materials science"],"compounds":["Tc compounds","Tc oxides"],"trendRadius":1.575,"trendEN":1.61,"fact":"Technetium is a transition metal in period 5 and group 7."},{"number":44,"symbol":"Ru","name":"Ruthenium","group":8,"period":5,"category":"Transition Metal","state":"Solid","block":"d","x":8,"y":5,"shells":[2,8,18,16],"shellText":"2, 8, 18, 16","valency":"variable","reactivity":"variable","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["ruthenium chemistry","materials science"],"compounds":["Ru compounds","Ru oxides"],"trendRadius":1.55,"trendEN":1.74,"fact":"Ruthenium is a transition metal in period 5 and group 8."},{"number":45,"symbol":"Rh","name":"Rhodium","group":9,"period":5,"category":"Transition Metal","state":"Solid","block":"d","x":9,"y":5,"shells":[2,8,18,17],"shellText":"2, 8, 18, 17","valency":"variable","reactivity":"variable","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["rhodium chemistry","materials science"],"compounds":["Rh compounds","Rh oxides"],"trendRadius":1.525,"trendEN":1.87,"fact":"Rhodium is a transition metal in period 5 and group 9."},{"number":46,"symbol":"Pd","name":"Palladium","group":10,"period":5,"category":"Transition Metal","state":"Solid","block":"d","x":10,"y":5,"shells":[2,8,18,18],"shellText":"2, 8, 18, 18","valency":"variable","reactivity":"variable","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["palladium chemistry","materials science"],"compounds":["Pd compounds","Pd oxides"],"trendRadius":1.5,"trendEN":2.0,"fact":"Palladium is a transition metal in period 5 and group 10."},{"number":47,"symbol":"Ag","name":"Silver","group":11,"period":5,"category":"Transition Metal","state":"Solid","block":"d","x":11,"y":5,"shells":[2,8,18,19],"shellText":"2, 8, 18, 19","valency":"variable","reactivity":"variable","discovery":"Known since antiquity","uses":["electronics","jewelry"],"compounds":["AgNO₃","AgCl"],"trendRadius":1.475,"trendEN":2.13,"fact":"Silver is a transition metal in period 5 and group 11."},{"number":48,"symbol":"Cd","name":"Cadmium","group":12,"period":5,"category":"Transition Metal","state":"Solid","block":"d","x":12,"y":5,"shells":[2,8,18,20],"shellText":"2, 8, 18, 20","valency":"variable","reactivity":"variable","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["cadmium chemistry","materials science"],"compounds":["Cd compounds","Cd oxides"],"trendRadius":1.45,"trendEN":2.26,"fact":"Cadmium is a transition metal in period 5 and group 12."},{"number":49,"symbol":"In","name":"Indium","group":13,"period":5,"category":"Post-transition Metal","state":"Solid","block":"p","x":13,"y":5,"shells":[2,8,18,21],"shellText":"2, 8, 18, 21","valency":"+3","reactivity":"moderate","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["indium chemistry","materials science"],"compounds":["In compounds","In oxides"],"trendRadius":1.425,"trendEN":2.39,"fact":"Indium is a post-transition metal in period 5 and group 13."},{"number":50,"symbol":"Sn","name":"Tin","group":14,"period":5,"category":"Post-transition Metal","state":"Solid","block":"p","x":14,"y":5,"shells":[2,8,18,22],"shellText":"2, 8, 18, 22","valency":"±4","reactivity":"moderate","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["tin chemistry","materials science"],"compounds":["Sn compounds","Sn oxides"],"trendRadius":1.4,"trendEN":2.52,"fact":"Tin is a post-transition metal in period 5 and group 14."},{"number":51,"symbol":"Sb","name":"Antimony","group":15,"period":5,"category":"Metalloid","state":"Solid","block":"p","x":15,"y":5,"shells":[2,8,18,23],"shellText":"2, 8, 18, 23","valency":"-3 / +3 / +5","reactivity":"moderate","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["antimony chemistry","materials science"],"compounds":["Sb compounds","Sb oxides"],"trendRadius":1.375,"trendEN":2.65,"fact":"Antimony is a metalloid in period 5 and group 15."},{"number":52,"symbol":"Te","name":"Tellurium","group":16,"period":5,"category":"Metalloid","state":"Solid","block":"p","x":16,"y":5,"shells":[2,8,18,24],"shellText":"2, 8, 18, 24","valency":"-2 / +4 / +6","reactivity":"moderate","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["tellurium chemistry","materials science"],"compounds":["Te compounds","Te oxides"],"trendRadius":1.35,"trendEN":2.78,"fact":"Tellurium is a metalloid in period 5 and group 16."},{"number":53,"symbol":"I","name":"Iodine","group":17,"period":5,"category":"Halogen","state":"Solid","block":"p","x":17,"y":5,"shells":[2,8,18,25],"shellText":"2, 8, 18, 25","valency":"-1 / 1","reactivity":"very high","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["iodine chemistry","materials science"],"compounds":["I compounds","I oxides"],"trendRadius":1.325,"trendEN":3.41,"fact":"Iodine is a halogen in period 5 and group 17."},{"number":54,"symbol":"Xe","name":"Xenon","group":18,"period":5,"category":"Noble Gas","state":"Gas","block":"p","x":18,"y":5,"shells":[2,8,18,26],"shellText":"2, 8, 18, 26","valency":"0","reactivity":"very low","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["xenon chemistry","materials science"],"compounds":["Xe compounds","Xe oxides"],"trendRadius":1.3,"trendEN":2.54,"fact":"Xenon is a noble gas in period 5 and group 18."},{"number":55,"symbol":"Cs","name":"Cesium","group":1,"period":6,"category":"Alkali Metal","state":"Solid","block":"s","x":1,"y":6,"shells":[2,8,18,27],"shellText":"2, 8, 18, 27","valency":"+1","reactivity":"very high","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["cesium chemistry","materials science"],"compounds":["Cs compounds","Cs oxides"],"trendRadius":1.885,"trendEN":0.5,"fact":"Cesium is a alkali metal in period 6 and group 1."},{"number":56,"symbol":"Ba","name":"Barium","group":2,"period":6,"category":"Alkaline Earth Metal","state":"Solid","block":"s","x":2,"y":6,"shells":[2,8,18,28],"shellText":"2, 8, 18, 28","valency":"+2","reactivity":"high","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["barium chemistry","materials science"],"compounds":["Ba compounds","Ba oxides"],"trendRadius":1.86,"trendEN":0.56,"fact":"Barium is a alkaline earth metal in period 6 and group 2."},{"number":57,"symbol":"La","name":"Lanthanum","group":3,"period":6,"category":"Lanthanide","state":"Solid","block":"f","x":3,"y":9,"shells":[2,8,18,29],"shellText":"2, 8, 18, 29","valency":"+3","reactivity":"high","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["lanthanum chemistry","materials science"],"compounds":["La compounds","La oxides"],"trendRadius":1.835,"trendEN":1.09,"fact":"Lanthanum is a lanthanide in period 6 and group 3."},{"number":58,"symbol":"Ce","name":"Cerium","group":3,"period":6,"category":"Lanthanide","state":"Solid","block":"f","x":4,"y":9,"shells":[2,8,18,30],"shellText":"2, 8, 18, 30","valency":"+3","reactivity":"high","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["cerium chemistry","materials science"],"compounds":["Ce compounds","Ce oxides"],"trendRadius":1.835,"trendEN":1.09,"fact":"Cerium is a lanthanide in period 6."},{"number":59,"symbol":"Pr","name":"Praseodymium","group":3,"period":6,"category":"Lanthanide","state":"Solid","block":"f","x":5,"y":9,"shells":[2,8,18,31],"shellText":"2, 8, 18, 31","valency":"+3","reactivity":"high","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["praseodymium chemistry","materials science"],"compounds":["Pr compounds","Pr oxides"],"trendRadius":1.835,"trendEN":1.09,"fact":"Praseodymium is a lanthanide in period 6."},{"number":60,"symbol":"Nd","name":"Neodymium","group":3,"period":6,"category":"Lanthanide","state":"Solid","block":"f","x":6,"y":9,"shells":[2,8,18,32],"shellText":"2, 8, 18, 32","valency":"+3","reactivity":"high","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["neodymium chemistry","materials science"],"compounds":["Nd compounds","Nd oxides"],"trendRadius":1.835,"trendEN":1.09,"fact":"Neodymium is a lanthanide in period 6."},{"number":61,"symbol":"Pm","name":"Promethium","group":3,"period":6,"category":"Lanthanide","state":"Solid","block":"f","x":7,"y":9,"shells":[2,8,18,32,1],"shellText":"2, 8, 18, 32, 1","valency":"+3","reactivity":"high","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["promethium chemistry","materials science"],"compounds":["Pm compounds","Pm oxides"],"trendRadius":1.835,"trendEN":1.09,"fact":"Promethium is a lanthanide in period 6."},{"number":62,"symbol":"Sm","name":"Samarium","group":3,"period":6,"category":"Lanthanide","state":"Solid","block":"f","x":8,"y":9,"shells":[2,8,18,32,2],"shellText":"2, 8, 18, 32, 2","valency":"+3","reactivity":"high","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["samarium chemistry","materials science"],"compounds":["Sm compounds","Sm oxides"],"trendRadius":1.835,"trendEN":1.09,"fact":"Samarium is a lanthanide in period 6."},{"number":63,"symbol":"Eu","name":"Europium","group":3,"period":6,"category":"Lanthanide","state":"Solid","block":"f","x":9,"y":9,"shells":[2,8,18,32,3],"shellText":"2, 8, 18, 32, 3","valency":"+3","reactivity":"high","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["europium chemistry","materials science"],"compounds":["Eu compounds","Eu oxides"],"trendRadius":1.835,"trendEN":1.09,"fact":"Europium is a lanthanide in period 6."},{"number":64,"symbol":"Gd","name":"Gadolinium","group":3,"period":6,"category":"Lanthanide","state":"Solid","block":"f","x":10,"y":9,"shells":[2,8,18,32,4],"shellText":"2, 8, 18, 32, 4","valency":"+3","reactivity":"high","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["gadolinium chemistry","materials science"],"compounds":["Gd compounds","Gd oxides"],"trendRadius":1.835,"trendEN":1.09,"fact":"Gadolinium is a lanthanide in period 6."},{"number":65,"symbol":"Tb","name":"Terbium","group":3,"period":6,"category":"Lanthanide","state":"Solid","block":"f","x":11,"y":9,"shells":[2,8,18,32,5],"shellText":"2, 8, 18, 32, 5","valency":"+3","reactivity":"high","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["terbium chemistry","materials science"],"compounds":["Tb compounds","Tb oxides"],"trendRadius":1.835,"trendEN":1.09,"fact":"Terbium is a lanthanide in period 6."},{"number":66,"symbol":"Dy","name":"Dysprosium","group":3,"period":6,"category":"Lanthanide","state":"Solid","block":"f","x":12,"y":9,"shells":[2,8,18,32,6],"shellText":"2, 8, 18, 32, 6","valency":"+3","reactivity":"high","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["dysprosium chemistry","materials science"],"compounds":["Dy compounds","Dy oxides"],"trendRadius":1.835,"trendEN":1.09,"fact":"Dysprosium is a lanthanide in period 6."},{"number":67,"symbol":"Ho","name":"Holmium","group":3,"period":6,"category":"Lanthanide","state":"Solid","block":"f","x":13,"y":9,"shells":[2,8,18,32,7],"shellText":"2, 8, 18, 32, 7","valency":"+3","reactivity":"high","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["holmium chemistry","materials science"],"compounds":["Ho compounds","Ho oxides"],"trendRadius":1.835,"trendEN":1.09,"fact":"Holmium is a lanthanide in period 6."},{"number":68,"symbol":"Er","name":"Erbium","group":3,"period":6,"category":"Lanthanide","state":"Solid","block":"f","x":14,"y":9,"shells":[2,8,18,32,8],"shellText":"2, 8, 18, 32, 8","valency":"+3","reactivity":"high","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["erbium chemistry","materials science"],"compounds":["Er compounds","Er oxides"],"trendRadius":1.835,"trendEN":1.09,"fact":"Erbium is a lanthanide in period 6."},{"number":69,"symbol":"Tm","name":"Thulium","group":3,"period":6,"category":"Lanthanide","state":"Solid","block":"f","x":15,"y":9,"shells":[2,8,18,32,9],"shellText":"2, 8, 18, 32, 9","valency":"+3","reactivity":"high","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["thulium chemistry","materials science"],"compounds":["Tm compounds","Tm oxides"],"trendRadius":1.835,"trendEN":1.09,"fact":"Thulium is a lanthanide in period 6."},{"number":70,"symbol":"Yb","name":"Ytterbium","group":3,"period":6,"category":"Lanthanide","state":"Solid","block":"f","x":16,"y":9,"shells":[2,8,18,32,10],"shellText":"2, 8, 18, 32, 10","valency":"+3","reactivity":"high","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["ytterbium chemistry","materials science"],"compounds":["Yb compounds","Yb oxides"],"trendRadius":1.835,"trendEN":1.09,"fact":"Ytterbium is a lanthanide in period 6."},{"number":71,"symbol":"Lu","name":"Lutetium","group":3,"period":6,"category":"Lanthanide","state":"Solid","block":"d","x":17,"y":9,"shells":[2,8,18,32,11],"shellText":"2, 8, 18, 32, 11","valency":"+3","reactivity":"high","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["lutetium chemistry","materials science"],"compounds":["Lu compounds","Lu oxides"],"trendRadius":1.835,"trendEN":1.09,"fact":"Lutetium is a lanthanide in period 6 and group 3."},{"number":72,"symbol":"Hf","name":"Hafnium","group":4,"period":6,"category":"Transition Metal","state":"Solid","block":"d","x":4,"y":6,"shells":[2,8,18,32,12],"shellText":"2, 8, 18, 32, 12","valency":"variable","reactivity":"variable","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["hafnium chemistry","materials science"],"compounds":["Hf compounds","Hf oxides"],"trendRadius":1.81,"trendEN":1.22,"fact":"Hafnium is a transition metal in period 6 and group 4."},{"number":73,"symbol":"Ta","name":"Tantalum","group":5,"period":6,"category":"Transition Metal","state":"Solid","block":"d","x":5,"y":6,"shells":[2,8,18,32,13],"shellText":"2, 8, 18, 32, 13","valency":"variable","reactivity":"variable","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["tantalum chemistry","materials science"],"compounds":["Ta compounds","Ta oxides"],"trendRadius":1.785,"trendEN":1.35,"fact":"Tantalum is a transition metal in period 6 and group 5."},{"number":74,"symbol":"W","name":"Tungsten","group":6,"period":6,"category":"Transition Metal","state":"Solid","block":"d","x":6,"y":6,"shells":[2,8,18,32,14],"shellText":"2, 8, 18, 32, 14","valency":"variable","reactivity":"variable","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["tungsten chemistry","materials science"],"compounds":["W compounds","W oxides"],"trendRadius":1.76,"trendEN":1.48,"fact":"Tungsten is a transition metal in period 6 and group 6."},{"number":75,"symbol":"Re","name":"Rhenium","group":7,"period":6,"category":"Transition Metal","state":"Solid","block":"d","x":7,"y":6,"shells":[2,8,18,32,15],"shellText":"2, 8, 18, 32, 15","valency":"variable","reactivity":"variable","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["rhenium chemistry","materials science"],"compounds":["Re compounds","Re oxides"],"trendRadius":1.735,"trendEN":1.61,"fact":"Rhenium is a transition metal in period 6 and group 7."},{"number":76,"symbol":"Os","name":"Osmium","group":8,"period":6,"category":"Transition Metal","state":"Solid","block":"d","x":8,"y":6,"shells":[2,8,18,32,16],"shellText":"2, 8, 18, 32, 16","valency":"variable","reactivity":"variable","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["osmium chemistry","materials science"],"compounds":["Os compounds","Os oxides"],"trendRadius":1.71,"trendEN":1.74,"fact":"Osmium is a transition metal in period 6 and group 8."},{"number":77,"symbol":"Ir","name":"Iridium","group":9,"period":6,"category":"Transition Metal","state":"Solid","block":"d","x":9,"y":6,"shells":[2,8,18,32,17],"shellText":"2, 8, 18, 32, 17","valency":"variable","reactivity":"variable","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["iridium chemistry","materials science"],"compounds":["Ir compounds","Ir oxides"],"trendRadius":1.685,"trendEN":1.87,"fact":"Iridium is a transition metal in period 6 and group 9."},{"number":78,"symbol":"Pt","name":"Platinum","group":10,"period":6,"category":"Transition Metal","state":"Solid","block":"d","x":10,"y":6,"shells":[2,8,18,32,18],"shellText":"2, 8, 18, 32, 18","valency":"variable","reactivity":"variable","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["platinum chemistry","materials science"],"compounds":["Pt compounds","Pt oxides"],"trendRadius":1.66,"trendEN":2.0,"fact":"Platinum is a transition metal in period 6 and group 10."},{"number":79,"symbol":"Au","name":"Gold","group":11,"period":6,"category":"Transition Metal","state":"Solid","block":"d","x":11,"y":6,"shells":[2,8,18,32,19],"shellText":"2, 8, 18, 32, 19","valency":"variable","reactivity":"variable","discovery":"Known since antiquity","uses":["jewelry","electronic contacts"],"compounds":["AuCl₃"],"trendRadius":1.635,"trendEN":2.13,"fact":"Gold is a transition metal in period 6 and group 11."},{"number":80,"symbol":"Hg","name":"Mercury","group":12,"period":6,"category":"Transition Metal","state":"Liquid","block":"d","x":12,"y":6,"shells":[2,8,18,32,20],"shellText":"2, 8, 18, 32, 20","valency":"variable","reactivity":"variable","discovery":"Known since antiquity","uses":["special instruments","research"],"compounds":["Hg compounds","Hg oxides"],"trendRadius":1.61,"trendEN":2.26,"fact":"Mercury is a transition metal in period 6 and group 12."},{"number":81,"symbol":"Tl","name":"Thallium","group":13,"period":6,"category":"Post-transition Metal","state":"Solid","block":"p","x":13,"y":6,"shells":[2,8,18,32,21],"shellText":"2, 8, 18, 32, 21","valency":"+3","reactivity":"moderate","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["thallium chemistry","materials science"],"compounds":["Tl compounds","Tl oxides"],"trendRadius":1.585,"trendEN":2.39,"fact":"Thallium is a post-transition metal in period 6 and group 13."},{"number":82,"symbol":"Pb","name":"Lead","group":14,"period":6,"category":"Post-transition Metal","state":"Solid","block":"p","x":14,"y":6,"shells":[2,8,18,32,22],"shellText":"2, 8, 18, 32, 22","valency":"±4","reactivity":"moderate","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["lead chemistry","materials science"],"compounds":["Pb compounds","Pb oxides"],"trendRadius":1.56,"trendEN":2.52,"fact":"Lead is a post-transition metal in period 6 and group 14."},{"number":83,"symbol":"Bi","name":"Bismuth","group":15,"period":6,"category":"Post-transition Metal","state":"Solid","block":"p","x":15,"y":6,"shells":[2,8,18,32,23],"shellText":"2, 8, 18, 32, 23","valency":"-3 / +3 / +5","reactivity":"moderate","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["bismuth chemistry","materials science"],"compounds":["Bi compounds","Bi oxides"],"trendRadius":1.535,"trendEN":2.65,"fact":"Bismuth is a post-transition metal in period 6 and group 15."},{"number":84,"symbol":"Po","name":"Polonium","group":16,"period":6,"category":"Metalloid","state":"Solid","block":"p","x":16,"y":6,"shells":[2,8,18,32,24],"shellText":"2, 8, 18, 32, 24","valency":"-2 / +4 / +6","reactivity":"moderate","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["polonium chemistry","materials science"],"compounds":["Po compounds","Po oxides"],"trendRadius":1.51,"trendEN":2.78,"fact":"Polonium is a metalloid in period 6 and group 16."},{"number":85,"symbol":"At","name":"Astatine","group":17,"period":6,"category":"Halogen","state":"Solid","block":"p","x":17,"y":6,"shells":[2,8,18,32,25],"shellText":"2, 8, 18, 32, 25","valency":"-1 / 1","reactivity":"very high","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["astatine chemistry","materials science"],"compounds":["At compounds","At oxides"],"trendRadius":1.485,"trendEN":3.41,"fact":"Astatine is a halogen in period 6 and group 17."},{"number":86,"symbol":"Rn","name":"Radon","group":18,"period":6,"category":"Noble Gas","state":"Gas","block":"p","x":18,"y":6,"shells":[2,8,18,32,26],"shellText":"2, 8, 18, 32, 26","valency":"0","reactivity":"very low","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["radon chemistry","materials science"],"compounds":["Rn compounds","Rn oxides"],"trendRadius":1.46,"trendEN":2.54,"fact":"Radon is a noble gas in period 6 and group 18."},{"number":87,"symbol":"Fr","name":"Francium","group":1,"period":7,"category":"Alkali Metal","state":"Solid","block":"s","x":1,"y":7,"shells":[2,8,18,32,27],"shellText":"2, 8, 18, 32, 27","valency":"+1","reactivity":"very high","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["francium chemistry","materials science"],"compounds":["Fr compounds","Fr oxides"],"trendRadius":2.045,"trendEN":0.5,"fact":"Francium is a alkali metal in period 7 and group 1."},{"number":88,"symbol":"Ra","name":"Radium","group":2,"period":7,"category":"Alkaline Earth Metal","state":"Solid","block":"s","x":2,"y":7,"shells":[2,8,18,32,28],"shellText":"2, 8, 18, 32, 28","valency":"+2","reactivity":"high","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["radium chemistry","materials science"],"compounds":["Ra compounds","Ra oxides"],"trendRadius":2.02,"trendEN":0.56,"fact":"Radium is a alkaline earth metal in period 7 and group 2."},{"number":89,"symbol":"Ac","name":"Actinium","group":3,"period":7,"category":"Actinide","state":"Solid","block":"f","x":3,"y":10,"shells":[2,8,18,32,29],"shellText":"2, 8, 18, 32, 29","valency":"+3 / +4","reactivity":"high","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["actinium chemistry","materials science"],"compounds":["Ac compounds","Ac oxides"],"trendRadius":1.995,"trendEN":1.09,"fact":"Actinium is a actinide in period 7 and group 3."},{"number":90,"symbol":"Th","name":"Thorium","group":3,"period":7,"category":"Actinide","state":"Solid","block":"f","x":4,"y":10,"shells":[2,8,18,32,30],"shellText":"2, 8, 18, 32, 30","valency":"+3 / +4","reactivity":"high","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["thorium chemistry","materials science"],"compounds":["Th compounds","Th oxides"],"trendRadius":1.995,"trendEN":1.09,"fact":"Thorium is a actinide in period 7."},{"number":91,"symbol":"Pa","name":"Protactinium","group":3,"period":7,"category":"Actinide","state":"Solid","block":"f","x":5,"y":10,"shells":[2,8,18,32,31],"shellText":"2, 8, 18, 32, 31","valency":"+3 / +4","reactivity":"high","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["protactinium chemistry","materials science"],"compounds":["Pa compounds","Pa oxides"],"trendRadius":1.995,"trendEN":1.09,"fact":"Protactinium is a actinide in period 7."},{"number":92,"symbol":"U","name":"Uranium","group":3,"period":7,"category":"Actinide","state":"Solid","block":"f","x":6,"y":10,"shells":[2,8,18,32,32],"shellText":"2, 8, 18, 32, 32","valency":"+3 / +4","reactivity":"high","discovery":"Martin Heinrich Klaproth","uses":["nuclear fuel","scientific research"],"compounds":["UO₂","UF₆"],"trendRadius":1.995,"trendEN":1.09,"fact":"Uranium is a actinide in period 7."},{"number":93,"symbol":"Np","name":"Neptunium","group":3,"period":7,"category":"Actinide","state":"Solid","block":"f","x":7,"y":10,"shells":[2,8,18,32,32,1],"shellText":"2, 8, 18, 32, 32, 1","valency":"+3 / +4","reactivity":"high","discovery":"Edwin McMillan and Philip Abelson","uses":["neptunium chemistry","materials science"],"compounds":["Np compounds","Np oxides"],"trendRadius":1.995,"trendEN":1.09,"fact":"Neptunium is a actinide in period 7."},{"number":94,"symbol":"Pu","name":"Plutonium","group":3,"period":7,"category":"Actinide","state":"Solid","block":"f","x":8,"y":10,"shells":[2,8,18,32,32,2],"shellText":"2, 8, 18, 32, 32, 2","valency":"+3 / +4","reactivity":"high","discovery":"Glenn Seaborg and team","uses":["plutonium chemistry","materials science"],"compounds":["Pu compounds","Pu oxides"],"trendRadius":1.995,"trendEN":1.09,"fact":"Plutonium is a actinide in period 7."},{"number":95,"symbol":"Am","name":"Americium","group":3,"period":7,"category":"Actinide","state":"Solid","block":"f","x":9,"y":10,"shells":[2,8,18,32,32,3],"shellText":"2, 8, 18, 32, 32, 3","valency":"+3 / +4","reactivity":"high","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["americium chemistry","materials science"],"compounds":["Am compounds","Am oxides"],"trendRadius":1.995,"trendEN":1.09,"fact":"Americium is a actinide in period 7."},{"number":96,"symbol":"Cm","name":"Curium","group":3,"period":7,"category":"Actinide","state":"Solid","block":"f","x":10,"y":10,"shells":[2,8,18,32,32,4],"shellText":"2, 8, 18, 32, 32, 4","valency":"+3 / +4","reactivity":"high","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["curium chemistry","materials science"],"compounds":["Cm compounds","Cm oxides"],"trendRadius":1.995,"trendEN":1.09,"fact":"Curium is a actinide in period 7."},{"number":97,"symbol":"Bk","name":"Berkelium","group":3,"period":7,"category":"Actinide","state":"Solid","block":"f","x":11,"y":10,"shells":[2,8,18,32,32,5],"shellText":"2, 8, 18, 32, 32, 5","valency":"+3 / +4","reactivity":"high","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["berkelium chemistry","materials science"],"compounds":["Bk compounds","Bk oxides"],"trendRadius":1.995,"trendEN":1.09,"fact":"Berkelium is a actinide in period 7."},{"number":98,"symbol":"Cf","name":"Californium","group":3,"period":7,"category":"Actinide","state":"Solid","block":"f","x":12,"y":10,"shells":[2,8,18,32,32,6],"shellText":"2, 8, 18, 32, 32, 6","valency":"+3 / +4","reactivity":"high","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["californium chemistry","materials science"],"compounds":["Cf compounds","Cf oxides"],"trendRadius":1.995,"trendEN":1.09,"fact":"Californium is a actinide in period 7."},{"number":99,"symbol":"Es","name":"Einsteinium","group":3,"period":7,"category":"Actinide","state":"Solid","block":"f","x":13,"y":10,"shells":[2,8,18,32,32,7],"shellText":"2, 8, 18, 32, 32, 7","valency":"+3 / +4","reactivity":"high","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["einsteinium chemistry","materials science"],"compounds":["Es compounds","Es oxides"],"trendRadius":1.995,"trendEN":1.09,"fact":"Einsteinium is a actinide in period 7."},{"number":100,"symbol":"Fm","name":"Fermium","group":3,"period":7,"category":"Actinide","state":"Solid","block":"f","x":14,"y":10,"shells":[2,8,18,32,32,8],"shellText":"2, 8, 18, 32, 32, 8","valency":"+3 / +4","reactivity":"high","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["fermium chemistry","materials science"],"compounds":["Fm compounds","Fm oxides"],"trendRadius":1.995,"trendEN":1.09,"fact":"Fermium is a actinide in period 7."},{"number":101,"symbol":"Md","name":"Mendelevium","group":3,"period":7,"category":"Actinide","state":"Solid","block":"f","x":15,"y":10,"shells":[2,8,18,32,32,9],"shellText":"2, 8, 18, 32, 32, 9","valency":"+3 / +4","reactivity":"high","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["mendelevium chemistry","materials science"],"compounds":["Md compounds","Md oxides"],"trendRadius":1.995,"trendEN":1.09,"fact":"Mendelevium is a actinide in period 7."},{"number":102,"symbol":"No","name":"Nobelium","group":3,"period":7,"category":"Actinide","state":"Solid","block":"f","x":16,"y":10,"shells":[2,8,18,32,32,10],"shellText":"2, 8, 18, 32, 32, 10","valency":"+3 / +4","reactivity":"high","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["nobelium chemistry","materials science"],"compounds":["No compounds","No oxides"],"trendRadius":1.995,"trendEN":1.09,"fact":"Nobelium is a actinide in period 7."},{"number":103,"symbol":"Lr","name":"Lawrencium","group":3,"period":7,"category":"Actinide","state":"Solid","block":"d","x":17,"y":10,"shells":[2,8,18,32,32,11],"shellText":"2, 8, 18, 32, 32, 11","valency":"+3 / +4","reactivity":"high","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["lawrencium chemistry","materials science"],"compounds":["Lr compounds","Lr oxides"],"trendRadius":1.995,"trendEN":1.09,"fact":"Lawrencium is a actinide in period 7 and group 3."},{"number":104,"symbol":"Rf","name":"Rutherfordium","group":4,"period":7,"category":"Transition Metal","state":"Unknown","block":"d","x":4,"y":7,"shells":[2,8,18,32,32,12],"shellText":"2, 8, 18, 32, 32, 12","valency":"variable","reactivity":"variable","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["rutherfordium chemistry","materials science"],"compounds":["Rf compounds","Rf oxides"],"trendRadius":1.97,"trendEN":1.22,"fact":"Rutherfordium is a transition metal in period 7 and group 4."},{"number":105,"symbol":"Db","name":"Dubnium","group":5,"period":7,"category":"Transition Metal","state":"Unknown","block":"d","x":5,"y":7,"shells":[2,8,18,32,32,13],"shellText":"2, 8, 18, 32, 32, 13","valency":"variable","reactivity":"variable","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["dubnium chemistry","materials science"],"compounds":["Db compounds","Db oxides"],"trendRadius":1.945,"trendEN":1.35,"fact":"Dubnium is a transition metal in period 7 and group 5."},{"number":106,"symbol":"Sg","name":"Seaborgium","group":6,"period":7,"category":"Transition Metal","state":"Unknown","block":"d","x":6,"y":7,"shells":[2,8,18,32,32,14],"shellText":"2, 8, 18, 32, 32, 14","valency":"variable","reactivity":"variable","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["seaborgium chemistry","materials science"],"compounds":["Sg compounds","Sg oxides"],"trendRadius":1.92,"trendEN":1.48,"fact":"Seaborgium is a transition metal in period 7 and group 6."},{"number":107,"symbol":"Bh","name":"Bohrium","group":7,"period":7,"category":"Transition Metal","state":"Unknown","block":"d","x":7,"y":7,"shells":[2,8,18,32,32,15],"shellText":"2, 8, 18, 32, 32, 15","valency":"variable","reactivity":"variable","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["bohrium chemistry","materials science"],"compounds":["Bh compounds","Bh oxides"],"trendRadius":1.895,"trendEN":1.61,"fact":"Bohrium is a transition metal in period 7 and group 7."},{"number":108,"symbol":"Hs","name":"Hassium","group":8,"period":7,"category":"Transition Metal","state":"Unknown","block":"d","x":8,"y":7,"shells":[2,8,18,32,32,16],"shellText":"2, 8, 18, 32, 32, 16","valency":"variable","reactivity":"variable","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["hassium chemistry","materials science"],"compounds":["Hs compounds","Hs oxides"],"trendRadius":1.87,"trendEN":1.74,"fact":"Hassium is a transition metal in period 7 and group 8."},{"number":109,"symbol":"Mt","name":"Meitnerium","group":9,"period":7,"category":"Unknown","state":"Unknown","block":"d","x":9,"y":7,"shells":[2,8,18,32,32,17],"shellText":"2, 8, 18, 32, 32, 17","valency":"unknown","reactivity":"moderate","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["meitnerium chemistry","materials science"],"compounds":["Mt compounds","Mt oxides"],"trendRadius":1.845,"trendEN":1.87,"fact":"Meitnerium is a unknown in period 7 and group 9."},{"number":110,"symbol":"Ds","name":"Darmstadtium","group":10,"period":7,"category":"Unknown","state":"Unknown","block":"d","x":10,"y":7,"shells":[2,8,18,32,32,18],"shellText":"2, 8, 18, 32, 32, 18","valency":"unknown","reactivity":"moderate","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["darmstadtium chemistry","materials science"],"compounds":["Ds compounds","Ds oxides"],"trendRadius":1.82,"trendEN":2.0,"fact":"Darmstadtium is a unknown in period 7 and group 10."},{"number":111,"symbol":"Rg","name":"Roentgenium","group":11,"period":7,"category":"Unknown","state":"Unknown","block":"d","x":11,"y":7,"shells":[2,8,18,32,32,18,1],"shellText":"2, 8, 18, 32, 32, 18, 1","valency":"unknown","reactivity":"moderate","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["roentgenium chemistry","materials science"],"compounds":["Rg compounds","Rg oxides"],"trendRadius":1.795,"trendEN":2.13,"fact":"Roentgenium is a unknown in period 7 and group 11."},{"number":112,"symbol":"Cn","name":"Copernicium","group":12,"period":7,"category":"Transition Metal","state":"Unknown","block":"d","x":12,"y":7,"shells":[2,8,18,32,32,18,2],"shellText":"2, 8, 18, 32, 32, 18, 2","valency":"variable","reactivity":"variable","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["copernicium chemistry","materials science"],"compounds":["Cn compounds","Cn oxides"],"trendRadius":1.77,"trendEN":2.26,"fact":"Copernicium is a transition metal in period 7 and group 12."},{"number":113,"symbol":"Nh","name":"Nihonium","group":13,"period":7,"category":"Unknown","state":"Unknown","block":"p","x":13,"y":7,"shells":[2,8,18,32,32,18,3],"shellText":"2, 8, 18, 32, 32, 18, 3","valency":"+3","reactivity":"moderate","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["nihonium chemistry","materials science"],"compounds":["Nh compounds","Nh oxides"],"trendRadius":1.745,"trendEN":2.39,"fact":"Nihonium is a unknown in period 7 and group 13."},{"number":114,"symbol":"Fl","name":"Flerovium","group":14,"period":7,"category":"Post-transition Metal","state":"Unknown","block":"p","x":14,"y":7,"shells":[2,8,18,32,32,18,4],"shellText":"2, 8, 18, 32, 32, 18, 4","valency":"±4","reactivity":"moderate","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["flerovium chemistry","materials science"],"compounds":["Fl compounds","Fl oxides"],"trendRadius":1.72,"trendEN":2.52,"fact":"Flerovium is a post-transition metal in period 7 and group 14."},{"number":115,"symbol":"Mc","name":"Moscovium","group":15,"period":7,"category":"Unknown","state":"Unknown","block":"p","x":15,"y":7,"shells":[2,8,18,32,32,18,5],"shellText":"2, 8, 18, 32, 32, 18, 5","valency":"-3 / +3 / +5","reactivity":"moderate","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["moscovium chemistry","materials science"],"compounds":["Mc compounds","Mc oxides"],"trendRadius":1.695,"trendEN":2.65,"fact":"Moscovium is a unknown in period 7 and group 15."},{"number":116,"symbol":"Lv","name":"Livermorium","group":16,"period":7,"category":"Unknown","state":"Unknown","block":"p","x":16,"y":7,"shells":[2,8,18,32,32,18,6],"shellText":"2, 8, 18, 32, 32, 18, 6","valency":"-2 / +4 / +6","reactivity":"moderate","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["livermorium chemistry","materials science"],"compounds":["Lv compounds","Lv oxides"],"trendRadius":1.67,"trendEN":2.78,"fact":"Livermorium is a unknown in period 7 and group 16."},{"number":117,"symbol":"Ts","name":"Tennessine","group":17,"period":7,"category":"Unknown","state":"Unknown","block":"p","x":17,"y":7,"shells":[2,8,18,32,32,18,7],"shellText":"2, 8, 18, 32, 32, 18, 7","valency":"unknown","reactivity":"moderate","discovery":"Modern isolation and characterization by chemists during periodic table development","uses":["tennessine chemistry","materials science"],"compounds":["Ts compounds","Ts oxides"],"trendRadius":1.645,"trendEN":2.91,"fact":"Tennessine is a unknown in period 7 and group 17."},{"number":118,"symbol":"Og","name":"Oganesson","group":18,"period":7,"category":"Noble Gas","state":"Unknown","block":"p","x":18,"y":7,"shells":[2,8,18,32,32,18,8],"shellText":"2, 8, 18, 32, 32, 18, 8","valency":"0","reactivity":"very low","discovery":"Joint Institute for Nuclear Research and collaborators","uses":["oganesson chemistry","materials science"],"compounds":["Og compounds","Og oxides"],"trendRadius":1.62,"trendEN":2.54,"fact":"Oganesson is a noble gas in period 7 and group 18."}];

const CAT_COLORS = {
  "Alkali Metal":"#ff6b6b",
  "Alkaline Earth Metal":"#f7b267",
  "Transition Metal":"#4dabf7",
  "Post-transition Metal":"#74c69d",
  "Metalloid":"#c77dff",
  "Nonmetal":"#ffd166",
  "Halogen":"#00c2a8",
  "Noble Gas":"#9b5de5",
  "Lanthanide":"#ef476f",
  "Actinide":"#06d6a0",
  "Unknown":"#94a3b8"
};
const BLOCK_COLORS = {s:"#ff6b6b",p:"#4dabf7",d:"#06d6a0",f:"#c77dff"};
const VALENCY_COLORS = {"0":"#6c757d","+1":"#ff8fab","+2":"#ffb703","+3":"#8ecae6","±4":"#c77dff","variable":"#4cc9f0","-1 / 1":"#06d6a0","-3 / +3 / +5":"#9d4edd","-2 / +4 / +6":"#f28482","+3 / +4":"#b8c0ff","unknown":"#94a3b8"};
const REACTIVITY_COLORS = {"very low":"#6c757d","low":"#8d99ae","moderate":"#4ea8de","moderate to high":"#00b4d8","high":"#ffb703","very high":"#ef476f","variable":"#7b2cbf"};

const table = document.getElementById("periodicTable");
const legend = document.getElementById("legend");
const popup = document.getElementById("popup");
const popupBody = document.getElementById("popupBody");
const closePopup = document.getElementById("closePopup");
const selectedSummary = document.getElementById("selectedSummary");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const viewMode = document.getElementById("viewMode");
const groupFilter = document.getElementById("groupFilter");
const resetBtn = document.getElementById("resetBtn");
const quickButtons = [...document.querySelectorAll(".quick-btn")];
const tabButtons = [...document.querySelectorAll(".tab-btn")];
const views = [...document.querySelectorAll(".view")];
const flashcard = document.getElementById("flashcard");
const flashFront = document.querySelector(".flash-front");
const flashBack = document.querySelector(".flash-back");
const flashFilter = document.getElementById("flashFilter");
const prevFlash = document.getElementById("prevFlash");
const flipFlash = document.getElementById("flipFlash");
const nextFlash = document.getElementById("nextFlash");
const groupStudySelect = document.getElementById("groupStudySelect");
const groupStudyInfo = document.getElementById("groupStudyInfo");
const groupStudyElements = document.getElementById("groupStudyElements");
const trendCanvas = document.getElementById("trendCanvas");
const trendCtx = trendCanvas.getContext("2d");
const trendMetric = document.getElementById("trendMetric");
const trendScope = document.getElementById("trendScope");
const trendNotes = document.getElementById("trendNotes");
const buildRevision = document.getElementById("buildRevision");
const printSheet = document.getElementById("printSheet");
const revisionSheet = document.getElementById("revisionSheet");
const atomCanvas = document.getElementById("atomCanvas");
const atomCtx = atomCanvas.getContext("2d");

let currentElement = ELEMENTS[0];
let currentQuick = "";
let flashIndex = 0;
let flashPool = [...ELEMENTS];
let atomAngle = 0;

function setupFilters() {
  [...new Set(ELEMENTS.map(e => e.category))].sort().forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    categoryFilter.appendChild(opt);
    const fopt = opt.cloneNode(true);
    flashFilter.appendChild(fopt);
  });
  for (let g = 1; g <= 18; g++) {
    const opt = document.createElement("option");
    opt.value = String(g);
    opt.textContent = `Group ${g}`;
    groupFilter.appendChild(opt);
    groupStudySelect.appendChild(opt.cloneNode(true));
  }
  groupStudySelect.value = "1";
}

function cardColor(el) {
  if (viewMode.value === "block") return BLOCK_COLORS[el.block] || "#94a3b8";
  if (viewMode.value === "valency") return VALENCY_COLORS[el.valency] || "#94a3b8";
  if (viewMode.value === "reactivity") return REACTIVITY_COLORS[el.reactivity] || "#94a3b8";
  if (viewMode.value === "group") {
    const hue = ((el.group || 1) * 20) % 360;
    return `hsl(${hue} 72% 58%)`;
  }
  return CAT_COLORS[el.category] || "#94a3b8";
}

function renderLegend() {
  legend.innerHTML = "";
  const items = [];
  if (viewMode.value === "block") {
    Object.entries(BLOCK_COLORS).forEach(([k,v]) => items.push([`${k}-block`, v]));
  } else if (viewMode.value === "valency") {
    Object.entries(VALENCY_COLORS).forEach(([k,v]) => items.push([k, v]));
  } else if (viewMode.value === "reactivity") {
    Object.entries(REACTIVITY_COLORS).forEach(([k,v]) => items.push([k, v]));
  } else if (viewMode.value === "group") {
    for (let g = 1; g <= 18; g++) {
      items.push([`Group ${g}`, `hsl(${(g*20)%360} 72% 58%)`]);
    }
  } else {
    Object.entries(CAT_COLORS).forEach(([k,v]) => items.push([k, v]));
  }
  items.forEach(([label, color]) => {
    const div = document.createElement("div");
    div.className = "legend-item";
    div.innerHTML = `<span class="swatch" style="background:${color}"></span><span>${label}</span>`;
    legend.appendChild(div);
  });
}

function matchesQuick(el) {
  if (!currentQuick) return true;
  if (currentQuick === "Metals") return !["Nonmetal","Halogen","Noble Gas","Metalloid"].includes(el.category);
  if (currentQuick === "Nonmetals") return ["Nonmetal","Halogen","Noble Gas"].includes(el.category);
  if (currentQuick === "Metalloids") return el.category === "Metalloid";
  if (currentQuick === "Halogens") return el.category === "Halogen";
  if (currentQuick === "Noble") return el.category === "Noble Gas";
  return true;
}

function visible(el) {
  const q = searchInput.value.trim().toLowerCase();
  const categoryOk = categoryFilter.value === "all" || el.category === categoryFilter.value;
  const groupOk = groupFilter.value === "all" || String(el.group) === groupFilter.value;
  const quickOk = matchesQuick(el);
  const queryOk = !q || el.name.toLowerCase().includes(q) || el.symbol.toLowerCase().includes(q) || String(el.number).includes(q);
  return categoryOk && groupOk && quickOk && queryOk;
}

function renderTable() {
  table.innerHTML = "";
  for (let y = 1; y <= 10; y++) {
    for (let x = 1; x <= 18; x++) {
      const el = ELEMENTS.find(e => e.x === x && e.y === y);
      if (!el) {
        const blank = document.createElement("div");
        blank.className = "blank";
        table.appendChild(blank);
        continue;
      }
      const card = document.createElement("div");
      card.className = `element ${visible(el) ? "" : "dim"} ${currentElement.number === el.number ? "active" : ""}`;
      card.style.background = cardColor(el);
      card.innerHTML = `
        <div class="num">${el.number}</div>
        <div class="symbol">${el.symbol}</div>
        <div class="name">${el.name}</div>
        <div class="meta">${el.group ? `G${el.group}` : "f-block"}</div>
      `;
      card.onclick = () => {
        currentElement = el;
        renderTable();
        renderSelectedSummary();
        openPopup(el);
      };
      table.appendChild(card);
    }
  }
}

function orbitalLayout(z) {
  const order = [
    ["1s",1],["2s",1],["2p",3],["3s",1],["3p",3],["4s",1],["3d",5],["4p",3],["5s",1],["4d",5],["5p",3],["6s",1],["4f",7],["5d",5],["6p",3],["7s",1],["5f",7],["6d",5],["7p",3]
  ];
  let left = z;
  return order.map(([label, boxes]) => {
    const capacity = boxes * 2;
    const fill = Math.max(0, Math.min(capacity, left));
    left -= fill;
    return {label, boxes, fill};
  }).filter(row => row.fill > 0 || ["1s","2s","2p","3s"].includes(row.label));
}

function renderOrbitalBoxes(z) {
  const rows = orbitalLayout(z);
  return `<div class="orbital-boxes">${rows.map(row => {
    let left = row.fill;
    const boxes = [];
    for (let i=0;i<row.boxes;i++) {
      let txt = "";
      if (left > 0) {
        txt = "↑";
        left--;
        if (left > row.boxes - i - 1) {
          txt = "↑↓";
          left--;
        }
      }
      boxes.push(`<div class="orbital-box">${txt}</div>`);
    }
    return `<div class="orbital-row"><strong>${row.label}</strong><div class="boxset">${boxes.join("")}</div></div>`;
  }).join("")}</div>`;
}

function renderSelectedSummary() {
  selectedSummary.innerHTML = `
    <strong>${currentElement.name} (${currentElement.symbol})</strong><br>
    Atomic number: ${currentElement.number}<br>
    Category: ${currentElement.category}<br>
    Group/Period: ${currentElement.group} / ${currentElement.period}<br>
    Valency: ${currentElement.valency}<br>
    Reactivity: ${currentElement.reactivity}<br>
    Shells: ${currentElement.shellText}
  `;
}

function openPopup(el) {
  popup.classList.remove("hidden");
  popupBody.innerHTML = `
    <div class="popup-title">
      <div class="popup-badge" style="background:${cardColor(el)}">${el.symbol}</div>
      <div>
        <h2 style="margin:0">${el.name}</h2>
        <div class="info-block">Atomic number ${el.number} · Group ${el.group} · Period ${el.period} · ${el.category}</div>
      </div>
    </div>

    <div class="popup-grid">
      <div class="popup-chip"><strong>Uses</strong><br>${el.uses.join(", ")}</div>
      <div class="popup-chip"><strong>Common compounds</strong><br>${el.compounds.join(", ")}</div>
      <div class="popup-chip"><strong>Discovery</strong><br>${el.discovery}</div>
      <div class="popup-chip"><strong>Learning facts</strong><br>${el.fact}</div>
      <div class="popup-chip"><strong>Valency</strong><br>${el.valency}</div>
      <div class="popup-chip"><strong>Reaction tendency</strong><br>${el.reactivity}</div>
      <div class="popup-chip"><strong>Electron shells</strong><br>${el.shellText}</div>
      <div class="popup-chip"><strong>Approx. electronegativity</strong><br>${el.trendEN}</div>
    </div>

    <div class="popup-chip" style="margin-top:12px">
      <strong>Orbital filling diagram</strong>
      ${renderOrbitalBoxes(el.number)}
    </div>
  `;
}

closePopup.onclick = () => popup.classList.add("hidden");
popup.onclick = (e) => { if (e.target === popup) popup.classList.add("hidden"); };

function showView(id) {
  views.forEach(v => v.classList.remove("active-view"));
  document.getElementById(id).classList.add("active-view");
  tabButtons.forEach(btn => btn.classList.toggle("active", btn.dataset.view === id));
}

tabButtons.forEach(btn => btn.onclick = () => showView(btn.dataset.view));

quickButtons.forEach(btn => btn.onclick = () => {
  quickButtons.forEach(b => b.classList.remove("active"));
  if (currentQuick === btn.dataset.quick) {
    currentQuick = "";
  } else {
    currentQuick = btn.dataset.quick;
    btn.classList.add("active");
  }
  renderTable();
});

[searchInput, categoryFilter, viewMode, groupFilter].forEach(el => el.addEventListener("input", () => {
  renderLegend();
  renderTable();
}));
viewMode.addEventListener("change", renderLegend);

resetBtn.onclick = () => {
  searchInput.value = "";
  categoryFilter.value = "all";
  groupFilter.value = "all";
  viewMode.value = "category";
  currentQuick = "";
  quickButtons.forEach(b => b.classList.remove("active"));
  renderLegend();
  renderTable();
};

function buildFlashPool() {
  flashPool = flashFilter.value === "all" ? [...ELEMENTS] : ELEMENTS.filter(e => e.category === flashFilter.value);
  flashIndex = 0;
  renderFlash();
}

function renderFlash() {
  const el = flashPool[flashIndex] || ELEMENTS[0];
  flashFront.innerHTML = `<div><div class="flash-symbol">${el.symbol}</div><div class="flash-name">${el.name}</div><div class="info-block">Tap or click to flip</div></div>`;
  flashBack.innerHTML = `
    <div>
      <strong>${el.name}</strong><br>
      Category: ${el.category}<br>
      Group/Period: ${el.group} / ${el.period}<br>
      Valency: ${el.valency}<br>
      Reactivity: ${el.reactivity}<br>
      Uses: ${el.uses.join(", ")}
    </div>
  `;
  flashcard.classList.remove("flipped");
}
flashFilter.onchange = buildFlashPool;
flashcard.onclick = () => flashcard.classList.toggle("flipped");
flipFlash.onclick = () => flashcard.classList.toggle("flipped");
prevFlash.onclick = () => { flashIndex = (flashIndex - 1 + flashPool.length) % flashPool.length; renderFlash(); };
nextFlash.onclick = () => { flashIndex = (flashIndex + 1) % flashPool.length; renderFlash(); };

function renderGroupStudy() {
  const g = Number(groupStudySelect.value || 1);
  const inGroup = ELEMENTS.filter(e => e.group === g);
  groupStudyInfo.innerHTML = `
    <strong>Group ${g}</strong><br>
    Elements in the same group often show similar valence patterns and chemical behavior.
  `;
  groupStudyElements.innerHTML = inGroup.map(el => `
    <div class="mini-card">
      <strong>${el.symbol}</strong><br>
      ${el.name}<br>
      <span class="info-block">Valency: ${el.valency}</span>
    </div>
  `).join("");
  drawTrendChart();
}
groupStudySelect.onchange = renderGroupStudy;
trendMetric.onchange = drawTrendChart;
trendScope.onchange = drawTrendChart;

function drawTrendChart() {
  const metric = trendMetric.value;
  const scope = trendScope.value;
  const ctx = trendCtx;
  const w = trendCanvas.width;
  const h = trendCanvas.height;
  ctx.clearRect(0,0,w,h);
  ctx.fillStyle = "#0a1020";
  ctx.fillRect(0,0,w,h);

  let points = [];
  if (scope === "group") {
    const g = Number(groupStudySelect.value || 1);
    points = ELEMENTS.filter(e => e.group === g).sort((a,b) => a.period - b.period);
    trendNotes.innerHTML = `Graph for <strong>Group ${g}</strong>. Down a group, radius usually increases while electronegativity often decreases.`;
  } else {
    const p = ELEMENTS.find(e => e.number === currentElement.number)?.period || 2;
    points = ELEMENTS.filter(e => e.period === p && e.y < 9).sort((a,b) => a.group - b.group);
    trendNotes.innerHTML = `Graph for <strong>Period ${p}</strong>. Across a period, radius often decreases while electronegativity often increases.`;
  }
  if (!points.length) return;

  const values = points.map(p => Number(p[metric]));
  const max = Math.max(...values);
  const min = Math.min(...values);
  const left = 50, bottom = h - 40, top = 30, right = w - 20;

  ctx.strokeStyle = "rgba(255,255,255,.25)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(left, top); ctx.lineTo(left, bottom); ctx.lineTo(right, bottom); ctx.stroke();

  ctx.strokeStyle = "#7dd3fc";
  ctx.lineWidth = 3;
  ctx.beginPath();
  points.forEach((p, i) => {
    const x = left + (i / Math.max(points.length - 1, 1)) * (right - left);
    const y = bottom - ((Number(p[metric]) - min) / Math.max(max - min, 0.001)) * (bottom - top);
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  });
  ctx.stroke();

  ctx.fillStyle = "#fff";
  ctx.font = "12px Arial";
  points.forEach((p, i) => {
    const x = left + (i / Math.max(points.length - 1, 1)) * (right - left);
    const y = bottom - ((Number(p[metric]) - min) / Math.max(max - min, 0.001)) * (bottom - top);
    ctx.beginPath();
    ctx.fillStyle = "#ffd166";
    ctx.arc(x, y, 4, 0, Math.PI*2);
    ctx.fill();
    ctx.fillStyle = "#fff";
    ctx.fillText(p.symbol, x - 8, bottom + 16);
  });
}

function buildRevisionSheet() {
  const selection = ELEMENTS.filter(e => visible(e)).slice(0, 24);
  revisionSheet.innerHTML = selection.map(el => `
    <div class="revision-card">
      <h3>${el.symbol} · ${el.name}</h3>
      <div>Atomic number: ${el.number}</div>
      <div>Group/Period: ${el.group} / ${el.period}</div>
      <div>Category: ${el.category}</div>
      <div>Valency: ${el.valency}</div>
      <div>Reactivity: ${el.reactivity}</div>
      <div>Uses: ${el.uses.join(", ")}</div>
      <div>Compounds: ${el.compounds.join(", ")}</div>
    </div>
  `).join("");
}
buildRevision.onclick = buildRevisionSheet;
printSheet.onclick = () => window.print();
document.getElementById("printSheet").onclick = () => window.print();

function drawAtom() {
  const ctx = atomCtx;
  const w = atomCanvas.width, h = atomCanvas.height;
  ctx.clearRect(0,0,w,h);
  const cx = w/2, cy = h/2;
  ctx.fillStyle = "#ffd166";
  ctx.beginPath();
  ctx.arc(cx, cy, 14, 0, Math.PI * 2);
  ctx.fill();

  const shells = currentElement.shells.slice(0, 4);
  shells.forEach((count, idx) => {
    const r = 42 + idx * 28;
    ctx.strokeStyle = "rgba(255,255,255,.18)";
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.stroke();

    const show = Math.min(count, 10);
    for (let i = 0; i < show; i++) {
      const a = ((Math.PI * 2) / show) * i + atomAngle * (idx % 2 ? -1 : 1) * (0.5 + idx * 0.15);
      const depth = Math.sin(a);
      const px = cx + Math.cos(a) * r * (0.9 + depth * 0.1);
      const py = cy + Math.sin(a) * r * 0.55;
      const size = 2.5 + (depth + 1.5);
      ctx.fillStyle = "rgba(125,211,252,.9)";
      ctx.beginPath();
      ctx.arc(px, py, size, 0, Math.PI * 2);
      ctx.fill();
    }
  });
  atomAngle += 0.02;
  requestAnimationFrame(drawAtom);
}

function init() {
  setupFilters();
  renderLegend();
  renderTable();
  renderSelectedSummary();
  buildFlashPool();
  renderGroupStudy();
  buildRevisionSheet();
  drawAtom();
}
init();
