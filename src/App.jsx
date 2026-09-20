import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechCard from "./components/TechCard";
import StackPanel from "./components/StackPanel";
import Footer from "./components/Footer";

function App() {
  const [tools, setTools] = useState([]);
  const [myStack, setMyStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/technologies.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not load technology data");
        }
        return response.json();
      })
      .then((data) => setTools(data))
      .catch(() => {
        setTools([]);
        toast.error("Could not load the technology list.");
      })
      .finally(() => setLoading(false));
  }, []);

  function addTool(tool) {
    const alreadyAdded = myStack.some((item) => item.id === tool.id);

    if (alreadyAdded) {
      toast.warning(`${tool.name} is already in your stack.`);
      return;
    }

    setMyStack((current) => [...current, tool]);
    toast.success(`${tool.name} added to your stack.`);
  }

  function removeTool(id, name) {
    setMyStack((current) => current.filter((item) => item.id !== id));
    toast.info(`${name} removed from your stack.`);
  }

  function clearStack() {
    if (!myStack.length) {
      return;
    }

    setMyStack([]);
    toast.info("Your stack has been cleared.");
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main>
        <Hero />

        <section id="technologies" className="bg-[#fbfbfc] py-12 sm:py-16">
          <div className="site-width">
            <div className="mb-8">
              <h2 className="text-center text-[26px] font-extrabold tracking-tight text-[#111827] sm:text-left sm:text-[36px]">
                Explore the{" "}
                <span className="brand-text">Technologies</span>
              </h2>
              <p className="mt-1 text-center text-[12px] text-[#64748b] sm:text-left sm:text-[15px]">
                Pick useful tools and build a stack for your next project.
              </p>
            </div>

            {loading ? (
              <div className="flex min-h-90 flex-col items-center justify-center gap-3">
                <span className="h-8 w-8 animate-spin rounded-full border-4 border-[#e2e8f0] border-t-[#d81b7e]" />
                <p className="text-sm text-[#94a3b8]">Loading technologies...</p>
              </div>
            ) : tools.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-[#dbe2ea] bg-white px-6 py-14 text-center text-sm text-[#64748b]">
                No technology data is available right now.
              </div>
            ) : (
              <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_284px]">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {tools.map((tool) => (
                    <TechCard
                      key={tool.id}
                      tool={tool}
                      added={myStack.some((item) => item.id === tool.id)}
                      onAdd={addTool}
                    />
                  ))}
                </div>

                <StackPanel
                  items={myStack}
                  onRemove={removeTool}
                  onClear={clearStack}
                />
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={1800}
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
