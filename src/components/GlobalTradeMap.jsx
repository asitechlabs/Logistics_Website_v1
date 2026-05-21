import React, { useState, memo } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRightLeft, PackageCheck, PackageOpen, X, ChevronRight } from 'lucide-react';

const geoUrl = '/world-110m.json';

// Trade data matching topology names
const tradeRegions = [
  { countryName: "United States of America", type: "both", volume: "High Volume", areas: ["New York, NY", "Los Angeles, CA", "Chicago, IL", "Miami, FL", "Seattle, WA"] },
  { countryName: "United Kingdom", type: "export", volume: "Medium Volume", areas: ["London", "Felixstowe", "Southampton", "Manchester"] },
  { countryName: "India", type: "import", volume: "High Volume", areas: ["Mumbai", "Chennai", "Kolkata", "New Delhi", "Mundra"] },
  { countryName: "Australia", type: "both", volume: "Medium Volume", areas: ["Sydney", "Melbourne", "Brisbane", "Perth"] },
  { countryName: "Nepal", type: "import", volume: "Low Volume", areas: ["Kathmandu", "Birgunj", "Biratnagar"] },
  { countryName: "Poland", type: "export", volume: "Medium Volume", areas: ["Warsaw", "Kraków", "Gdańsk", "Wrocław"] }
];

const colorMap = {
  export: '#3b82f6', // Blue
  import: '#10b981', // Green
  both: '#8b5cf6', // Purple
  inactive: '#f3f4f6', // Light gray
};

const hoverColorMap = {
  export: '#2563eb',
  import: '#059669',
  both: '#7c3aed',
  inactive: '#e5e7eb',
};

const GlobalTradeMap = () => {
  const [tooltipContent, setTooltipContent] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleMouseEnter = (geo, e) => {
    const region = tradeRegions.find((r) => r.countryName === geo.properties.name);
    if (region) {
      setTooltipContent(region);
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseMove = (e) => {
    if (tooltipContent) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseLeave = () => {
    setTooltipContent(null);
  };

  const getRegionColor = (geoName, isHover = false) => {
    const region = tradeRegions.find((r) => r.countryName === geoName);
    const type = region ? region.type : 'inactive';
    return isHover ? hoverColorMap[type] : colorMap[type];
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="global-trade-map">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[var(--accent)] font-bold uppercase tracking-widest text-sm mb-4 block"
          >
            Global Coverage
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-[var(--primary)] mb-6 uppercase tracking-tight"
          >
            Interactive Trade Routes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Explore our worldwide logistics network. We seamlessly connect continents, facilitating import, export, and cross-trade operations across major global hubs.
          </motion.p>
        </div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-4xl mx-auto bg-gray-50/50 rounded-[2rem] border border-gray-100 p-4 md:p-8 shadow-sm"
        >
          <ComposableMap
            projectionConfig={{
              scale: 140,
              center: [0, 20]
            }}
            width={800}
            height={400}
            style={{ width: "100%", height: "auto" }}
          >
            <ZoomableGroup zoom={1} minZoom={1} maxZoom={4} translateExtent={[[0, 0], [800, 400]]}>
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const isInteractive = tradeRegions.some(r => r.countryName === geo.properties.name);
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onMouseEnter={(e) => handleMouseEnter(geo, e)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => {
                          const region = tradeRegions.find((r) => r.countryName === geo.properties.name);
                          if (region) setSelectedCountry(region);
                        }}
                        style={{
                          default: {
                            fill: getRegionColor(geo.properties.name),
                            outline: "none",
                            stroke: "#ffffff",
                            strokeWidth: 0.5,
                            transition: "all 250ms"
                          },
                          hover: {
                            fill: getRegionColor(geo.properties.name, true),
                            outline: "none",
                            stroke: "#ffffff",
                            strokeWidth: 1,
                            cursor: isInteractive ? "pointer" : "default"
                          },
                          pressed: {
                            fill: getRegionColor(geo.properties.name, true),
                            outline: "none"
                          }
                        }}
                      />
                    );
                  })
                }
              </Geographies>
            </ZoomableGroup>
          </ComposableMap>

        </motion.div>

        {/* Legend */}
        <div className="max-w-4xl mx-auto mt-12 flex flex-wrap justify-center gap-6 md:gap-12">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-blue-500 shadow-sm"></div>
            <span className="text-sm font-bold text-gray-700 uppercase tracking-wide">Export Regions</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-green-500 shadow-sm"></div>
            <span className="text-sm font-bold text-gray-700 uppercase tracking-wide">Import Regions</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-purple-500 shadow-sm"></div>
            <span className="text-sm font-bold text-gray-700 uppercase tracking-wide">Import & Export</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full bg-gray-200 shadow-sm"></div>
            <span className="text-sm font-bold text-gray-700 uppercase tracking-wide">Inactive Area</span>
          </div>
        </div>

        {/* Stats Cards (placed below map to prevent overlap) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 max-w-4xl mx-auto">
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
              <PackageCheck size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Export Hubs</p>
              <p className="text-xl font-black text-gray-900 leading-none mt-1">45+</p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
              <PackageOpen size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Import Origins</p>
              <p className="text-xl font-black text-gray-900 leading-none mt-1">30+</p>
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 shrink-0">
              <ArrowRightLeft size={20} />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Dual Trade</p>
              <p className="text-xl font-black text-gray-900 leading-none mt-1">25+</p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Tooltip */}
      <AnimatePresence>
        {tooltipContent && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="fixed z-50 pointer-events-none bg-[var(--primary)] text-white p-4 rounded-xl shadow-2xl min-w-[200px] border border-white/10"
            style={{
              left: mousePosition.x + 15,
              top: mousePosition.y + 15,
            }}
          >
            <div className="flex items-center gap-2 mb-2">
              <MapPin size={16} className="text-[var(--accent)]" />
              <h4 className="font-bold text-lg">{tooltipContent.countryName}</h4>
            </div>
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Trade Type:</span>
                <span className={`font-semibold capitalize px-2 py-0.5 rounded-full text-xs ${tooltipContent.type === 'export' ? 'bg-blue-500/20 text-blue-300' :
                    tooltipContent.type === 'import' ? 'bg-green-500/20 text-green-300' :
                      'bg-purple-500/20 text-purple-300'
                  }`}>
                  {tooltipContent.type === 'both' ? 'Import & Export' : tooltipContent.type}
                </span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-400">Activity:</span>
                <span className="font-semibold text-white">{tooltipContent.volume}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Selected Country Modal */}
      <AnimatePresence>
        {selectedCountry && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCountry(null)}
              className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none"
            >
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-md pointer-events-auto flex flex-col max-h-[90vh]">
                <div className={`p-6 relative text-white ${selectedCountry.type === 'export' ? 'bg-blue-600' :
                    selectedCountry.type === 'import' ? 'bg-green-600' :
                      'bg-purple-600'
                  }`}>
                  <button
                    onClick={() => setSelectedCountry(null)}
                    className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                  <div className="flex items-center gap-3 mb-2 pr-8">
                    <MapPin size={24} className="shrink-0" />
                    <h3 className="text-2xl font-black truncate">{selectedCountry.countryName}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-white/90 flex-wrap">
                    <span className="uppercase text-xs font-bold tracking-wider">
                      {selectedCountry.type === 'both' ? 'Import & Export Region' : `${selectedCountry.type} Region`}
                    </span>
                    <span>•</span>
                    <span className="text-sm">{selectedCountry.volume}</span>
                  </div>
                </div>
                <div className="p-6 overflow-y-auto">
                  <h4 className="text-[var(--primary)] font-bold mb-4 uppercase text-sm tracking-wide">Areas Covered</h4>
                  <div className="space-y-3">
                    {selectedCountry.areas && selectedCountry.areas.length > 0 ? (
                      selectedCountry.areas.map((area, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                          <ChevronRight size={18} className="text-[var(--accent)] shrink-0" />
                          <span className="font-semibold text-gray-800">{area}</span>
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-500 italic text-sm">Nationwide coverage.</p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default memo(GlobalTradeMap);
