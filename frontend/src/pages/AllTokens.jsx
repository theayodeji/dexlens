import React, { useState, useEffect, useCallback } from "react";
import TokenList from "../components/TokenList";
import NewsSidebar from "../components/NewsSidebar";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorComponent from "../components/ErrorComponent";
import SearchBar from "../components/SearchBar";
import { fetchTokens, searchTokens } from "../lib/api";
import LoadingSpinner2 from "../components/LoadingSpinner2";

const AllTokensPage = () => {
  const [tokens, setTokens] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  // Load paginated tokens
  const loadTokens = useCallback(async () => {
    try {
      setIsLoading(true);
      setHasError(false);
      setErrorMessage("");

      const data = await fetchTokens(page, 50);
      setTokens(data);
    } catch (error) {
      setHasError(true);
      setErrorMessage(error.message || "Failed to load tokens.");
    } finally {
      setIsLoading(false);
    }
  }, [page]);

  // Handle search (manual trigger from button)
  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      setPage(1);
      loadTokens();
      return;
    }

    try {
      setIsSearching(true);
      setHasError(false);
      setErrorMessage("");

      const data = await searchTokens(searchQuery.trim());
      setTokens(data || []);
      setPage(1);
    } catch (error) {
      setHasError(true);
      setErrorMessage("Failed to search tokens. Please try again.");
      setTokens([]);
    } finally {
      setIsSearching(false);
    }
  };

  // Load tokens when query is empty or page changes
  useEffect(() => {
    if (!searchQuery.trim()) {
      loadTokens();
    }
  }, [page, searchQuery, loadTokens]);

  const handleNextPage = () => {
    if (!searchQuery.trim()) {
      setPage((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevPage = () => {
    if (!searchQuery.trim()) {
      setPage((prev) => Math.max(prev - 1, 1));
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 relative">
        <div className="flex-1">
          <div className="w-full flex items-center justify-center py-5">
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onSearch={handleSearch}
              placeholder="Search cryptocurrencies..."
            />
          </div>

          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">
              Cryptocurrencies
            </h1>
            {searchQuery && (
              <button
                onClick={handleClearSearch}
                className="text-sm text-blue-600 hover:text-blue-800 underline"
              >
                Clear Search
              </button>
            )}
          </div>

          {isLoading || isSearching ? (
            <LoadingSpinner2 />
          ) : hasError ? (
            <ErrorComponent
              message={errorMessage}
              onRetry={handleSearch}
            />
          ) : (
            <>
              <TokenList tokens={tokens} />

              {!searchQuery && (
                <div className="flex justify-between items-center mt-6">
                  <button
                    onClick={handlePrevPage}
                    disabled={page === 1}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>

                  <span className="text-gray-600">Page {page}</span>

                  <button
                    onClick={handleNextPage}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Next
                  </button>
                </div>
              )}

              <div className="mt-4 text-center text-gray-600">
                {searchQuery ? (
                  tokens.length > 0 ? (
                    <p>
                      {tokens.length} result{tokens.length !== 1 ? "s" : ""} found for "{searchQuery}"
                    </p>
                  ) : (
                    <p>No tokens found for "{searchQuery}". Try another search.</p>
                  )
                ) : (
                  <p>Showing page {page} of cryptocurrencies</p>
                )}
              </div>
            </>
          )}
        </div>

        <NewsSidebar />
      </div>
    </div>
  );
};

export default AllTokensPage;
