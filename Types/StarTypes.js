var StarTypes;
(function (StarTypes) {
    StarTypes[StarTypes["O"] = 1] = "O";
    StarTypes[StarTypes["B"] = 2] = "B";
    StarTypes[StarTypes["A"] = 3] = "A";
    StarTypes[StarTypes["F"] = 4] = "F";
    StarTypes[StarTypes["G"] = 5] = "G";
    StarTypes[StarTypes["K"] = 6] = "K";
    StarTypes[StarTypes["M"] = 7] = "M";
    StarTypes[StarTypes["Pulsar"] = 8] = "Pulsar";
    StarTypes[StarTypes["Neutron"] = 9] = "Neutron";
    StarTypes[StarTypes["Back_hole"] = 10] = "Back_hole";
})(StarTypes || (StarTypes = {}));

module.exports = StarTypes;

/*
enum StarTypes {
    O = 1,
    B,
    A,
    F,
    G,
    K, 
    M,
    Pulsar,
    Neutron,
    Back_hole
}
*/