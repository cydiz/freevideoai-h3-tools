# FreeVideo AI offline shot planner CLI

List shot templates, compose a prompt, or validate a JSON plan from stdin. All commands run locally. The [online studio](https://freevideoai.app/) handles generation separately.

    docker build -t freevideoai-shot-planner .
    docker run --rm --network none freevideoai-shot-planner templates
    echo '{"prompt":"Steam rises from a cup","mode":"text-to-video"}' | docker run -i --rm --network none freevideoai-shot-planner validate video -
