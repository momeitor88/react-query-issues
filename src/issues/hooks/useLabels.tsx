import { useQuery } from "@tanstack/react-query";
import { getLabels } from "../actions";

export const useLabels = () => {
    const labelsQuery = useQuery({
        queryKey: ['labels'],
        queryFn: getLabels,
        staleTime: 1000 * 60 * 60, // 1 hora de cache,
        placeholderData: [
          {
            "id": 6955781886,
            "node_id": "LA_kwDOAJy2Ks8AAAABnpjO_g",
            "url": "https://api.github.com/repos/facebook/react/labels/Compiler:%20todo",
            "name": "Compiler: todo",
            "color": "C2E0C6",
            "default": false
          },
          {
            "id": 1205087127,
            "node_id": "MDU6TGFiZWwxMjA1MDg3MTI3",
            "url": "https://api.github.com/repos/facebook/react/labels/Component:%20Concurrent%20Features",
            "name": "Component: Concurrent Features",
            "color": "ffccd3",
            "default": false,
            "description": ""
          },
        ]
      });
  return {labelsQuery}
}
