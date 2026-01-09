if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "C:/Users/A/.gradle/caches/8.14.3/transforms/9ff38684db6fe6acfdda42b443fcf80d/transformed/hermes-android-0.80.0-debug/prefab/modules/libhermes/libs/android.armeabi-v7a/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "C:/Users/A/.gradle/caches/8.14.3/transforms/9ff38684db6fe6acfdda42b443fcf80d/transformed/hermes-android-0.80.0-debug/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

