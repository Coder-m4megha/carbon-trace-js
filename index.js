const CarbonTrace = {
    config: { co2PerGB: 0.8, updateInterval: 2000, showDashboard: true },

    getNetworkImpact: () => {
        if (!window.performance || !window.performance.getEntriesByType) return 0;
        const resources = performance.getEntriesByType('resource');
        let totalBytes = 0;
        resources.forEach(res => {
            let size = res.transferSize || res.encodedBodySize || res.decodedBodySize || 0;
            if (size === 0 && (res.initiatorType === 'img' || res.initiatorType === 'fetch')) {
                size = 400000; // Fallback for CORS
            }
            totalBytes += size;
        });
        return (totalBytes / (1024 * 1024)).toFixed(3);
    },

    getCarbonScore: (mb) => ((mb / 1024) * CarbonTrace.config.co2PerGB).toFixed(5),

    initDashboard: () => {
        if (!CarbonTrace.config.showDashboard) return;
        const dash = document.createElement('div');
        dash.id = 'carbon-trace-ui';
        dash.style = "position:fixed; bottom:20px; right:20px; background:#1a1a1a; color:#0f0; padding:15px; border-radius:10px; font-family:monospace; z-index:10000; border-left:4px solid #0f0; min-width:160px; box-shadow:0 10px 20px rgba(0,0,0,0.5);";
        document.body.appendChild(dash);

        setInterval(() => {
            const mb = CarbonTrace.getNetworkImpact();
            const co2 = CarbonTrace.getCarbonScore(mb);
            dash.innerHTML = `<div style="font-size:10px; color:#888;">CARBON-TRACE</div>
                              <div style="margin:5px 0;">Data: ${mb} MB</div>
                              <div style="margin:5px 0;">CO2: ${co2} g</div>`;
        }, CarbonTrace.config.updateInterval);
    },

    start: (options = {}) => {
        CarbonTrace.config = { ...CarbonTrace.config, ...options };
        if (document.readyState === 'complete') { CarbonTrace.initDashboard(); } 
        else { window.addEventListener('load', CarbonTrace.initDashboard); }
    }
};

// Export for NPM
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CarbonTrace;
} else {
    window.CarbonTrace = CarbonTrace;
}