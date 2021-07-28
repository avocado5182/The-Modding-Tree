addLayer("gwa", {
    name: "gwa", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "gwa", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#FFFFFF",
    requires: () => {
		let requires = new Decimal(10);
		if (hasUpgrade("gwa", 12)) return new Decimal(1);
		return requires;
	},
    resource: "gwa", // Name of prestige currency
    baseResource: "avos", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1);
        return mult;
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1);
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "gwa: Reset for gwa", onPress(){if (canReset(this.layer)) doReset(this.layer);}},
    ],
    layerShown(){return true},
    upgrades: {
        11: {
            title: "upgrade",
            description: "doubles avo gain",
            cost: new Decimal(10)
        },
		12: {
			title: "gwa explosion",
			description: "boom",
			cost: new Decimal(50)
		},
		13: {
			title: "avo explosion",
			description: "boom II",
			cost: new Decimal(100)
		}
    }
})
