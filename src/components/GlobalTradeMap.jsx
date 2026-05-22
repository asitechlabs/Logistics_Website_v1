import React, { useState, useRef, useCallback, useEffect, memo } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRightLeft, PackageCheck, PackageOpen, X, ChevronRight, RotateCcw, MousePointerClick } from 'lucide-react';

const geoUrl = '/world-110m.json';

// Trade data matching topology names — with geographic coordinates for zoom
const tradeRegions = [
  { countryName: "United State of America", type: "both", volume: "High Volume", areas: ["New York, NY", "Los Angeles, CA", "Chicago, IL", "Miami, FL", "Seattle, WA"], coordinates: [-100, 40] },
  { countryName: "United Kingdom", type: "export", volume: "Medium Volume", areas: ["London", "Felixstowe", "Southampton", "Manchester"], coordinates: [-3, 55] },
  { countryName: "India", type: "import", volume: "High Volume", areas: ["Mumbai", "Chennai", "Kolkata", "New Delhi", "Mundra"], coordinates: [79, 22] },
  { countryName: "Australia", type: "both", volume: "Medium Volume", areas: ["Sydney", "Melbourne", "Brisbane", "Perth"], coordinates: [134, -25] },
  { countryName: "Germany", type: "both", volume: "Medium Volume", areas: ["Berlin", "Hamburg", "Munich", "Frankfurt"], coordinates: [10, 51] },
  { countryName: "China", type: "both", volume: "High Volume", areas: ["Beijing", "Shanghai", "Guangzhou", "Shenzhen"], coordinates: [104, 35] },
  { countryName: "Japan", type: "both", volume: "High Volume", areas: ["Tokyo", "Osaka", "Yokohama", "Nagoya"], coordinates: [138, 36] },
  { countryName: "South Korea", type: "both", volume: "High Volume", areas: ["Seoul", "Busan", "Incheon", "Daegu"], coordinates: [127, 37] },
  { countryName: "Sri Lanka", type: "both", volume: "Low Volume", areas: ["Colombo", "Kandy", "Galle"], coordinates: [80, 7] },
  { countryName: "United Arab Emirates", type: "both", volume: "Medium Volume", areas: ["Dubai", "Abu Dhabi", "Sharjah"], coordinates: [54, 24] },
  { countryName: "Bangladesh", type: "both", volume: "Low Volume", areas: ["Dhaka", "Chittagong", "Khulna"], coordinates: [90, 23] },
  { countryName: "Malaysia", type: "both", volume: "Medium Volume", areas: ["Kuala Lumpur", "Penang", "Johor Bahru"], coordinates: [102, 4] },
  { countryName: "Europe", type: "both", volume: "High Volume", areas: ["Paris", "Berlin", "Madrid", "Rome", "Amsterdam"], coordinates: [10, 50] },
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

const selectedColorMap = {
  export: '#1d4ed8',
  import: '#047857',
  both: '#6d28d9',
};

// Easing function for smooth animation
const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const DEFAULT_CENTER = [0, 20];
const DEFAULT_ZOOM = 1;
const ZOOMED_LEVEL = 4;
const ZOOM_IN_DURATION = 900;
const ZOOM_OUT_DURATION = 650;

const GlobalTradeMap = () => {
  const [tooltipContent, setTooltipContent] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [position, setPosition] = useState({ coordinates: DEFAULT_CENTER, zoom: DEFAULT_ZOOM });
  const [isZoomed, setIsZoomed] = useState(false);

  // Refs for animation control
  const animRef = useRef(null);
  const posRef = useRef({ coordinates: DEFAULT_CENTER, zoom: DEFAULT_ZOOM });
  const isAnimatingRef = useRef(false);

  // Clean up animation on unmount
  useEffect(() => {
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  // Smooth animated transition between map positions
  const animateToPosition = useCallback((targetCoords, targetZoom, duration = 800) => {
    if (animRef.current) cancelAnimationFrame(animRef.current);
    isAnimatingRef.current = true;

    const startCoords = [...posRef.current.coordinates];
    const startZoom = posRef.current.zoom;
    const startTime = performance.now();

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);

      const newPos = {
        coordinates: [
          startCoords[0] + (targetCoords[0] - startCoords[0]) * eased,
          startCoords[1] + (targetCoords[1] - startCoords[1]) * eased
        ],
        zoom: startZoom + (targetZoom - startZoom) * eased
      };

      posRef.current = newPos;
      setPosition(newPos);

      if (progress < 1) {
        animRef.current = requestAnimationFrame(step);
      } else {
        isAnimatingRef.current = false;
      }
    };

    animRef.current = requestAnimationFrame(step);
  }, []);

  // Zoom into a country
  const handleCountryClick = useCallback((geo) => {
    const region = tradeRegions.find((r) => r.countryName === geo.properties.name);
    if (!region) return;

    // If clicking the same country that's already selected, reset view
    if (selectedCountry?.countryName === region.countryName) {
      handleResetZoom();
      return;
    }

    setTooltipContent(null);
    setIsZoomed(true);
    animateToPosition(region.coordinates, ZOOMED_LEVEL, ZOOM_IN_DURATION);

    // Show the detail modal after zoom animation is halfway through
setTimeout(()=> setSelectedCountry(region), ZOOM_IN_DURATION * 1.5);
  }, [animateToPosition, selectedCountry]);

  // Reset to world view
  const handleResetZoom = useCallback(() => {
    setSelectedCountry(null);
    animateToPosition(DEFAULT_CENTER, DEFAULT_ZOOM, ZOOM_OUT_DURATION);
    setTimeout(() => setIsZoomed(false), ZOOM_OUT_DURATION * 0.5);
  }, [animateToPosition]);

  // Close modal but keep zoom
  const handleCloseModal = useCallback(() => {
    setSelectedCountry(null);
  }, []);

  const handleMouseEnter = (geo, e) => {
    if (isAnimatingRef.current) return;
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

  // Build Geography styles, with special highlight for the selected country
  const getGeoStyle = (geo) => {
    const isInteractive = tradeRegions.some(r => r.countryName === geo.properties.name);
    const region = tradeRegions.find(r => r.countryName === geo.properties.name);
    const isSelected = selectedCountry?.countryName === geo.properties.name;

    return {
      default: {
        fill: isSelected ? (selectedColorMap[region.type] || getRegionColor(geo.properties.name)) : getRegionColor(geo.properties.name),
        outline: "none",
        stroke: isSelected ? "#fbbf24" : "#ffffff",
        strokeWidth: isSelected ? 1.5 : 0.5,
        transition: "all 300ms ease",
      },
      hover: {
        fill: getRegionColor(geo.properties.name, true),
        outline: "none",
        stroke: isSelected ? "#fbbf24" : "#ffffff",
        strokeWidth: isSelected ? 1.5 : 1,
        cursor: isInteractive ? "pointer" : "default"
      },
      pressed: {
        fill: getRegionColor(geo.properties.name, true),
        outline: "none"
      }
    };
  };

  // When user manually drags / scrolls the map
  const handleMoveEnd = useCallback((newPos) => {
    if (!isAnimatingRef.current) {
      posRef.current = newPos;
      setPosition(newPos);
    }
  }, []);

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
            <ZoomableGroup
              center={position.coordinates}
              zoom={position.zoom}
              onMoveEnd={handleMoveEnd}
              minZoom={1}
              maxZoom={6}
            >
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={(e) => handleMouseEnter(geo, e)}
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                      onClick={() => handleCountryClick(geo)}
                      style={getGeoStyle(geo)}
                    />
                  ))
                }
              </Geographies>
            </ZoomableGroup>
          </ComposableMap>

          {/* Reset View Button — appears when zoomed */}
          <AnimatePresence>
            {isZoomed && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                transition={{ duration: 0.25 }}
                onClick={handleResetZoom}
                className="absolute top-6 right-6 md:top-10 md:right-10 flex items-center gap-2 bg-white/95 backdrop-blur-md text-[var(--primary)] px-4 py-2.5 rounded-xl shadow-lg border border-gray-200 text-xs font-black uppercase tracking-wider hover:bg-[var(--primary)] hover:text-white transition-all duration-300 z-20"
              >
                <RotateCcw size={14} />
                Reset View
              </motion.button>
            )}
          </AnimatePresence>

          {/* Zoom Hint — shown when not zoomed */}
          <AnimatePresence>
            {!isZoomed && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[var(--primary)]/90 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg pointer-events-none"
              >
                <MousePointerClick size={14} />
                Click a highlighted country to zoom in
              </motion.div>
            )}
          </AnimatePresence>
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
            <div className="mt-3 pt-2 border-t border-white/10 text-xs text-gray-300 flex items-center gap-1.5">
              <MousePointerClick size={12} />
              Click to zoom in
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
              onClick={handleResetZoom}
              className="fixed inset-0 bg-black/40 z-[60] backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none"
            >
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full max-w-md pointer-events-auto flex flex-col max-h-[90vh]">
                <div className={`p-6 relative text-white ${
                  selectedCountry.type === 'export' ? 'bg-gradient-to-br from-blue-600 to-blue-700' :
                  selectedCountry.type === 'import' ? 'bg-gradient-to-br from-green-600 to-green-700' :
                  'bg-gradient-to-br from-purple-600 to-purple-700'
                }`}>
                  <button 
                    onClick={handleResetZoom}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center text-white transition-all duration-200"
                  >
                    <X size={18} />
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
                        <motion.div 
                          key={idx} 
                          initial={{ opacity: 0, x: -15 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.08 }}
                          className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100 hover:border-gray-200 hover:bg-gray-100/50 transition-all duration-200"
                        >
                          <ChevronRight size={18} className="text-[var(--accent)] shrink-0" />
                          <span className="font-semibold text-gray-800">{area}</span>
                        </motion.div>
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
