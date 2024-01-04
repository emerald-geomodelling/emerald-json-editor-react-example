export const importFile = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await fetch("/api/file/new", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Network response was not ok: " + response.statusText);
    }

    return await response.json();
  } catch (error) {
    console.error("There was a problem with the fetch operation: ", error);
    throw error;
  }
};
