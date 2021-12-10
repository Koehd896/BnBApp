class Api::V1::BookingsController < ApplicationController
    # add validation of jwt then delete:
    # skip_before_action :authorized, only: [:create]

    def create
        @booking = Booking.create(booking_params)
        render json: @booking
    end

    private

    def booking_params
        params.require(:booking).permit(:user_id, :room_id)
    end
end
