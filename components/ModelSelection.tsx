'use client'

import useSWR from "swr";
import axios from "axios";
import Select from "react-select";

const fetchModels = async () => await axios.get("/api/getEngines").then(res => res.data);

function ModelSelection() {
    const {data: models, isLoading} = useSWR("models", fetchModels);
    const {data: model, mutate: setModel} = useSWR("model", {fallbackData: "text-davinci-003"});

    return (
        <div className="mt-2">
            <Select
                onChange={(e) => setModel(e.value)}
                value={model}
                placeholder={model}
                options={models && models?.modelOptions}
                isSearchable={true}
                isLoading={isLoading}
                menuPosition={"fixed"}
                classNames={{control: (state) => "bg-[#434654] border-[#434654]"}}
                />
        </div>
    );
}

export default ModelSelection;