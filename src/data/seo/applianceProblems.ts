export interface ApplianceProblem {
    id: string; // The URL slug for the problem
    name: string; // Plain English name of the problem
    searchKeyword: string; // The primary long-tail keyword
    shortDescription: string; // Short engaging description for the header
    solutionPreview: string; // A brief explanation of the possible fix
    urgency: "High" | "Medium" | "Low"; // Displayed as urgency tags
    estimatedCostPreview: string; // Trust building: "Repair starts at ₹199"
}

export type ServiceProblemsMap = Record<string, ApplianceProblem[]>;

export const applianceProblems: ServiceProblemsMap = {
    "ac-repair-service": [
        {
            id: "not-cooling",
            name: "AC Not Cooling",
            searchKeyword: "ac not cooling but fan is running",
            shortDescription: "Your AC is turned on but blowing warm room air instead of cooling down the space.",
            solutionPreview: "This is usually caused by a dirty condenser coil, a faulty capacitor, or low refrigerant (gas leak). Our technicians will perform a deep pressure wash or check the gas levels.",
            urgency: "High",
            estimatedCostPreview: "Inspection starts at ₹199"
        },
        {
            id: "water-leaking-inside",
            name: "Water Leaking Inside",
            searchKeyword: "split ac water dropping inside room",
            shortDescription: "Water is continuously dripping from the indoor AC unit into your room.",
            solutionPreview: "A clogged AC drain pipe or a frozen evaporator coil often causes indoor water leakage. We'll clear the blockage and ensure proper drainage flow.",
            urgency: "Medium",
            estimatedCostPreview: "Drain block removal from ₹499"
        },
        {
            id: "making-loud-noise",
            name: "Making Loud Noise",
            searchKeyword: "ac making rattling noise",
            shortDescription: "The AC unit is producing unusual rattling, buzzing, or grinding sounds.",
            solutionPreview: "Vibration sounds can come from a loose fan blade, failing blower motor, or an aging compressor. We'll tighten components or replace the worn-out bearing.",
            urgency: "Medium",
            estimatedCostPreview: "Noise fix starting at ₹299"
        },
        {
            id: "ac-turning-on-off",
            name: "AC Keeps Turning On and Off",
            searchKeyword: "ac turning on and off repeatedly",
            shortDescription: "Your AC compressor shuts down shortly after starting (short cycling).",
            solutionPreview: "Short cycling happens due to thermostat issues, an oversized AC, or severe airflow restriction. An electrical inspection is required.",
            urgency: "High",
            estimatedCostPreview: "Electrical inspection at ₹199"
        },
        {
            id: "foul-smell",
            name: "Foul Smell from AC",
            searchKeyword: "ac smelling bad like damp",
            shortDescription: "A stale, damp, or burning smell is coming from your AC vents.",
            solutionPreview: "Damp smells usually mean mold inside the drip pan, while burning smells indicate wire damage. A complete foam deep clean will resolve biological odors.",
            urgency: "Low",
            estimatedCostPreview: "Foam Deep Clean at ₹699"
        }
    ],

    "ro-service-repair": [
        {
            id: "water-tastes-bitter",
            name: "Water Tastes Bitter",
            searchKeyword: "ro water tastes bitter or bad",
            shortDescription: "The purified water from your RO has a bitter, salty, or unusual taste.",
            solutionPreview: "Bitter taste means your RO membrane might be ruptured, or the carbon filter is exhausted. A membrane check and TDS calibration will fix it.",
            urgency: "High",
            estimatedCostPreview: "Filter replacement starts at ₹350"
        },
        {
            id: "ro-not-filling-tank",
            name: "Tank Not Filling Up",
            searchKeyword: "ro machine running but tank not filling",
            shortDescription: "The RO machine is making a running noise, but the storage tank remains empty.",
            solutionPreview: "Low water pressure, a blocked pre-filter, or a failed RO booster pump can stop water flow. We'll measure the pump pressure and clear the filters.",
            urgency: "High",
            estimatedCostPreview: "Pump inspection at ₹149"
        },
        {
            id: "continuous-waste-water",
            name: "Continuous Waste Water",
            searchKeyword: "ro reject water running continuously",
            shortDescription: "The reject/waste water pipe keeps dripping even when the RO tank is full.",
            solutionPreview: "A faulty auto-shutoff valve (ASV) or check valve causes the machine to waste water endlessly. Changing the ASV will stop the leakage.",
            urgency: "Medium",
            estimatedCostPreview: "Valve replacement around ₹250"
        }
    ],

    "washing-machine-repair": [
        {
            id: "machine-not-spinning",
            name: "Drum Not Spinning",
            searchKeyword: "washing machine drum not rotating",
            shortDescription: "The washing machine fills with water, but the drum won't spin to wash or dry the clothes.",
            solutionPreview: "A broken drive belt, faulty motor, or a worn-out door switch can stop the drum. Our mechanic will inspect the motor linkage.",
            urgency: "High",
            estimatedCostPreview: "Belt/Motor fix from ₹450"
        },
        {
            id: "water-not-draining",
            name: "Water Not Draining",
            searchKeyword: "washing machine water not draining out",
            shortDescription: "Used soapy water remains inside the drum and won't drain out after the wash cycle.",
            solutionPreview: "Commonly caused by coins or lint blocking the drain pump, or a failed pump motor. We'll clear the blockage manually.",
            urgency: "High",
            estimatedCostPreview: "Drain motor clear from ₹350"
        },
        {
            id: "machine-shaking-violently",
            name: "Shaking and Vibrating Violently",
            searchKeyword: "washing machine jumping vibrating heavily",
            shortDescription: "The machine shakes aggressively and makes loud banging noises during the spin cycle.",
            solutionPreview: "Worn-out shock absorbers or an unbalanced load are the primary culprits. We may need to replace the suspension rods.",
            urgency: "Medium",
            estimatedCostPreview: "Suspension fix starting at ₹600"
        }
    ],

    "geyser-heater-repair": [
        {
            id: "water-not-heating",
            name: "Water Not Heating",
            searchKeyword: "electric geyser not heating water",
            shortDescription: "The geyser turns on, but the water remains completely cold.",
            solutionPreview: "This points to a burnt heating element or a tripped thermostat. Hard water scaling usually causes element failure.",
            urgency: "High",
            estimatedCostPreview: "Thermostat/Element fix starts ₹450"
        },
        {
            id: "geyser-water-leakage",
            name: "Water Dripping from Geyser",
            searchKeyword: "water leaking from bottom of geyser",
            shortDescription: "Water is continuously dripping from the bottom cover of the water heater.",
            solutionPreview: "Leakage can occur from loose inlet/outlet pipes or, worse, a rusted inner tank. We'll secure the fittings or suggest a replacement if the tank is cracked.",
            urgency: "High",
            estimatedCostPreview: "Leakage repair from ₹299"
        }
    ],

    "electrician-service": [
        {
            id: "mcb-tripping",
            name: "MCB Tripping Frequently",
            searchKeyword: "mcb trips when ac turns on",
            shortDescription: "The main circuit breaker (MCB) falls automatically, cutting off power to a room.",
            solutionPreview: "Tripping protects your home from short circuits or appliance overloads. We'll use a multimeter to trace the exact short circuit location.",
            urgency: "High",
            estimatedCostPreview: "Fault tracking from ₹299"
        },
        {
            id: "ceiling-fan-slow",
            name: "Ceiling Fan Very Slow",
            searchKeyword: "ceiling fan running slow speed",
            shortDescription: "The fan revolves very slowly even when the regulator is set to max speed.",
            solutionPreview: "A weak capacitor or jammed ball bearings cause the fan to drag. A quick capacitor swap usually restores full speed.",
            urgency: "Medium",
            estimatedCostPreview: "Capacitor change at ₹150"
        }
    ]
};
