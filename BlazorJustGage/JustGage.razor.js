export function initializeGauge(gaugeId, value, min, max, title) {
    const gauge = new JustGage({
        id: gaugeId,
        value: value,
        min: min,
        max: max,
        title: title,
        gaugeWidthScale: 0.6,
        levelColors: ['#00ff00', '#ff0000']
    });

    window[gaugeId] = gauge;
}

export function updateGauge(gaugeId, value) {
    const gauge = window[gaugeId];
    if (gauge) {
        gauge.refresh(value);
    }
}

export function disposeGauge(gaugeId) {
    delete window[gaugeId];
}
